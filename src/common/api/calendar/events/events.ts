import { calendarClient } from "../axios";

export function listEvents(calendar_id = "primary", params?: any){

    return calendarClient.get(`/${calendar_id}/events`,
    {
        params: params
    })
}

export function createEvents(calendar_id = "primary", params?: any, body?:any){

    return calendarClient.post(`/${calendar_id}/events`, JSON.stringify(body), {
        params: params
    })
}