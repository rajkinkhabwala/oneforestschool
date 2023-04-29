const {calendar_v3} = require("@googleapis/calendar");

const calendar = new calendar_v3.Calendar();

async function createEvent(token, calendar_id="primary", body){

    console.log("Attempting to create calendar event...");

    try {
        const result = await calendar.events.insert({
            "oauth_token": token,
            "calendarId": calendar_id,
            "requestBody": body
        });

        console.log(`${result.statusText}`);
        console.log(`Logging Result: ${result}`)
        return({
            data: result.data,
            status: result.status,
            statusText: result.statusText,
        });
        
    } catch (error) {

        console.log(error)
        throw error
    }
}

async function listEvents(token, calendar_id="primary",params){
    console.log('Attempting to get List of Events')

    try {
        const result = await calendar.events.list({
            oauth_token: token,
            calendarId: calendar_id,
            ...params
        })
        console.log(`${result.statusText}`);
        //console.log(`Logging Result: ${result}`)
        return({
            data: result.data,
            status: result.status,
            statusText: result.statusText,
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    createEvent,
    listEvents
}