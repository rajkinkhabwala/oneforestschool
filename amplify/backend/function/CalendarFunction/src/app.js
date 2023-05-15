/* Amplify Params - DO NOT EDIT
	API_OFSAPPLICATION_GRAPHQLAPIENDPOINTOUTPUT
	API_OFSAPPLICATION_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const gclient = require('@googleapis/calendar')
const { default: fetch, Request } = require("node-fetch");
const {updateUser: updateUserQuery} = require('./graphql/mutations')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const GRAPHQL_ENDPOINT = process.env.API_OFSAPPLICATION_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_OFSAPPLICATION_GRAPHQLAPIIDOUTPUT

// Setting Up Google Calendar:
const oauthClient = new gclient.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    redirectUri: process.env.REDIRECT_URI
})

/**********************
 * Example get method *
 **********************/

app.get('/calendar', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url, event: req.apiGateway.event});
});

app.get('/calendar/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/calendar/create-tokens', async function(req, res, next) {
  const {code} = req.body
  try {
    const response = await oauthClient.getToken(code);

    if(response.tokens.refresh_token){
      await updateUser(response.tokens.refresh_token)
    }

    res.json({
      message: "SUCCESS",
      tokens: response.tokens,
      response: response.res
    })
  } catch (error) {
    next({
      message: "ERROR",
      error: error
    })
  }
  console.log("Api Successfully Called")
});

app.post('/calendar/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/calendar', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/calendar/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/calendar', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/calendar/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

async function updateUser(refreshToken){

  const variables = {
    input: {
      google_refresh_token: refreshToken
    }
  }

    /** @type {import('node-fetch').RequestInit} */
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': GRAPHQL_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ updateUserQuery, variables })
    };
  
    const request = new Request(GRAPHQL_ENDPOINT, options);
  
    let statusCode = 200;
    let body;
    let response;
  
    try {
      response = await fetch(request);
      body = await response.json();
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 400;
      body = {
        errors: [
          {
            status: response.status,
            message: error.message,
            stack: error.stack
          }
        ]
      };
    }
  
    return {
      statusCode,
      body: JSON.stringify(body)
    };
}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
