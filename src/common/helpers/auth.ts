import { CognitoUser } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";

export async function isAuthorized(roles: [string]){

    try {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    
    const groups = user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"];
    
    if(roles.some((group) => groups.includes(group))){
        return({
            status: true,
            data: roles.filter((group) => groups.includes(group))
        })
    }else {
        
        return({
            status: false,
            data: "Support Required"
        })
    }

    }catch(error) {
        if (error === "The user is not authenticated"){
            console.log("Hello 1")
            return({
            status: false,
            data: error
            })
        }
    }
    return({
        status: false,
        data: "unknown"
    })
}
