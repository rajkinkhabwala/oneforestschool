const {calendar_v3} = require("@googleapis/calendar")

const calendar = new calendar_v3.Calendar()

async function listEvents(token){

    try {
        const result = await calendar.events.list({
            oauth_token: token,
            calendarId: "primary",
        })

        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    listEvents
}