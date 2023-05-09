
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


