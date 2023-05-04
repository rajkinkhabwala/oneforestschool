import { json } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";
import { useListCourseQuery } from "../../../common/queries/course.queries";

export function Component() {
    const { data, isLoading, isError, error} = useListCourseQuery();

    if(isError){
      json(
        {message: error},
        {status: 500, 
        statusText: apiError}
      )
    }
}


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

Component.displayName = "SingleCourse"