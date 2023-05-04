import { json } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { notAuthorized } from "../../../common/constants/errors/errors";

export async function loader(){

    const value = await isAuthorized(["Admins"])

    if(value){
        return value;
    } 

    json({
        message: notAuthorized
    }, {
        status: 401,
        statusText: "UNAUTHORIZATION"
    })
}

export function Component(){

    return(
        <>Signle Component</>
    )

}

Component.displayName = "SingleDepartment"