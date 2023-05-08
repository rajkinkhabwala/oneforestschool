
import { Auth } from "aws-amplify";
import axios from "axios";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export const calendarClient = axios.create({
    baseURL: `https://www.googleapis.com/calendar/v3/calendars`,
})

calendarClient.interceptors.request.use(async function(value) {
    
    value.headers.Authorization = `Bearer ` + (await Auth.currentSession()).getIdToken().payload["custom:provider_token"]
    value.headers["Content-Type"] = 'application/json'
    value.headers.Accept = 'application/json'
    value.maxBodyLength = Infinity
    return value
})

calendarClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
},
function(error) {
    
    if(error.status === "UNAUTHENTICATED"){
        Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google
        })
    }
    return error
}
)

