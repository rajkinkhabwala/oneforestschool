var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context, callback) => {

  let date = new Date()
  if(event.request.userAttributes.sub) {
    let params = {
      Item: {
          'id': {S: event.request.userAttributes.sub},
          '__typename': {S: 'Users'},
          'email': {S: event.request.userAttributes.email},
          'createdAt': {S: date.toISOString()},
          'updatedAt': {S: date.toISOString()},
      },
      TableName: process.env.USERTABLE
  }

try {
  const result = await ddb.putItem(params).promise()
  console.log("Result: ", result)
} catch (err) {
  console.log("Error: ", err)
  callback = (err, null);
}

console.log("Success: Everything executed correctly")
callback = (null, event)

} else {
  console.log("Error: Nothing was written to DynamoDB");
  
}

};
