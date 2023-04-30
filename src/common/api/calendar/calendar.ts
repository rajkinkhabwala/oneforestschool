import { CognitoUser } from "@aws-amplify/auth";
import { API, Auth } from "aws-amplify";



export async function listEvents(){
const user: CognitoUser = await Auth.currentAuthenticatedUser()
const token = user.getSignInUserSession()?.getIdToken().payload["custom:provider_token"]
console.log("Auth Token", (await Auth.currentSession()).getAccessToken().getJwtToken())
console.log("Provider Token", token)
    const apiName = 'CalendarQueries';
const path = '/calendar/listEvents';
const myInit = {
    
  headers: {
    body: {
      oauth_token: token
    },

    'Content-Type' : 'application/json',
    Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
  } 
};

API.get(apiName, path, myInit)
  .then((response) => {
    // Add your code here
    return response
  })
  .catch((error) => {
    console.log(error.response);
  });
}