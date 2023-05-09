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

export function createCalendarEvents(variables: GoogleCalendarVariable){

    return calendarClient.post(`/${variables.calendar_id}/events`, JSON.stringify(variables.body), {
        params: variables.params
    })
}