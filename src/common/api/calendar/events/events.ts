import { API, Auth } from "aws-amplify";
import { calendarClient } from "../axios";

type GoogleCalendarVariable = {
    calendar_id: "primary" | string,
    params?: any, 
    body?:any
}

export function listEvents(calendar_id = "primary", params?: any){

    return calendarClient.get(`/${calendar_id}/events`,
    {
        params: params
    })
}

export async function createCalendarEvents(value:any){

    let apiName = 'CalendarApi';
    let path = '/calendar/create-event';
    let myInit = {
        body: {
        "summary": "Event Form",
        "description": "This is Event Description.",
        "startDateTime": "2023-08-26T01:00:17.027Z",
        "startTimeZone": "America/Los_Angeles",
        "endDateTime": "2023-08-26T03:00:42.960Z",
        "isRecurrence": false
        },
        headers: {
        'content-type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}