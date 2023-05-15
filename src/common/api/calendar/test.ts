import { API, Auth } from "aws-amplify";

export async function getCalendar(){
    let apiName = 'CalendarApi';
    let path = "/calendar";
    let myInit = {
        headers: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        }
    }

    API.get(apiName, path, myInit).then((value) => {
            console.log(value)
            
        }).catch((err) => console.log(err));
    
}