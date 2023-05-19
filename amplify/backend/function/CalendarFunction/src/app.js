/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["GOOGLE_SECRET_VALUE"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const gclient = require("@googleapis/calendar");
const AWS = require("aws-sdk");
const rrule = require('rrule');
const crypto = require('crypto');
const dayjs = require("dayjs");

const docClient = new AWS.DynamoDB.DocumentClient();


// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(async(req, res,next) => {
  try {
  const { Parameters } = await (new AWS.SSM())
  .getParameters({
    Names: ["GOOGLE_SECRET_VALUE"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();
  
  req.ssmParameters = Parameters
  next()

  } catch (error) {
    console.error('Error fetching SSM parameters:', error);
    next(error);
  }
  


})

// Setting Up Google Calendar:
const oauthClient = new gclient.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  redirectUri: process.env.REDIRECT_URI,
});



app.get("/calendar", async (req, res, next) => {
  // Add your code here
  try {
    if (req.apiGateway.event.requestContext.authorizer.claims["sub"]) {
      const params = {
        TableName: process.env.TABLE_NAME,

        Key: {
          id: req.apiGateway.event.requestContext.authorizer.claims["sub"],
        },
      };

      const data = await docClient.get(params).promise();

      res.json({ success: "get call succeed!", url: req.url, data: data.Item });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.get("/calendar/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/calendar/create-tokens", async function (req, res, next) {
  const { code } = req.body;
  const { ssmParameters } = req;
  try {
    

    oauthClient._clientSecret = ssmParameters[0].Value
    const response = await oauthClient.getToken(code);

    if (req.apiGateway.event.requestContext.authorizer.claims["sub"]) {
      if (response.tokens.refresh_token) {

        const params = {
          TableName: process.env.TABLE_NAME,
  
          Key: {
            id: req.apiGateway.event.requestContext.authorizer.claims["sub"],
          },
        };
  
        const data = await docClient.get(params).promise();
        let newData = {
          '_version': data.Item["_version"] + 1,
          '_lastChangedAt': new Date().getTime(),
          'google_refresh_token': response.tokens.refresh_token
        }
        let expression = generateUpdateQuery(newData)
        await docClient.update({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: req.apiGateway.event.requestContext.authorizer.claims["sub"]
          },
          ...expression
        }).promise()

      }
    }

    res.json({
      message: "SUCCESS",
      tokens: {
        access_token: response.tokens.access_token,
        scope: response.tokens.scope,
        token_type: response.tokens.token_type,
        id_token: response.tokens.id_token,
        expiry_date: response.tokens.expiry_date,
      },
    });
  } catch (error) {
    next({
      message: "ERROR",
      error: error,
    });
  }
  console.log("Api Successfully Called");
});

app.post("/calendar/create-event", async function (req, res, next) {
  
  const { ssmParameters } = req;
  const { summary, description, endDate, endDateTime, endTimeZone, startDate, startDateTime, startTimeZone, freq,count, visibility, byweekday, isRecurrence, until, interval} = req.body
  var requestID = crypto.randomBytes(7).toString("hex")
  let rule;
  if(isRecurrence){
  rule = new rrule.RRule({
    freq: freq,
    count: count,
    until: dayjs(until).toDate(),
    byweekday: byweekday,
    interval: interval
  })
}
  try {

    oauthClient._clientSecret = ssmParameters[0].Value

    if (req.apiGateway.event.requestContext.authorizer.claims["sub"]){

      const params = {
        TableName: process.env.TABLE_NAME,

        Key: {
          id: req.apiGateway.event.requestContext.authorizer.claims["sub"],
        },
      };

      const data = await docClient.get(params).promise();
      console.log(data.Item["google_refresh_token"])
      if(data.Item["google_refresh_token"]){
        oauthClient.setCredentials({
          refresh_token: data.Item["google_refresh_token"]
        })

        const calendar = gclient.calendar('v3')
        const event = await calendar.events.insert({
          auth: oauthClient,
          calendarId: 'primary',
          conferenceDataVersion: '1',
          requestBody: {
            summary: summary,
            description: description,
            start: {
              date: startDate,
              dateTime: startDateTime,
              timeZone: startTimeZone
            },
            end: {
              date: endDate,
              dateTime: endDateTime,
              timeZone: endTimeZone
            },
            recurrence: isRecurrence ? [rule.toString()] : null,
            visibility: visibility,
            conferenceData: {
              createRequest: {
                conferenceSolutionKey: {
                  type: "hangoutsMeet",  
                },
                requestId: requestID
              }
            }
          }
        })

        res.json({
          message: "SUCCESS",
          event: event
        })
      }
      else {
        res.status(500).json({
          error: "Refresh Token not Found",
          message: "ERROR"
        })
      }
      

    }
    
  } catch (error) {
    console.log(error)
    next({
      message: "ERROR",
      error: error
    })
    
  }
  
});

/****************************
 * Example put method *
 ****************************/

app.put("/calendar", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/calendar/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/calendar", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/calendar/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

const generateUpdateQuery = (fields) => {
  let exp = {
      UpdateExpression: 'set',
      ExpressionAttributeNames: {},
      ExpressionAttributeValues: {}
  }

  Object.entries(fields).forEach(([key, item]) => {
      exp.UpdateExpression += ` #${key} = :${key},`;
      exp.ExpressionAttributeNames[`#${key}`] = key;
      exp.ExpressionAttributeValues[`:${key}`] = item
  })
  exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
  return exp

}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
