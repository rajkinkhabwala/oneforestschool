import { Outlet, json, useLocation } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { notAuthorized } from "../../../common/constants/errors/errors";
import { useListCourseQuery } from "../../../common/queries/course.queries";

export function Component() {
    const { data, isLoading, isError, error} = useListCourseQuery();
    const location = useLocation();

    if(isError){
      json(
        {message: error},
        {status: 500}
      )
    }

    return(
        <>
        {
         location.pathname === "/admin/course" ? 
         <>
         Course Component
         </>
         :
         <Outlet />
        }
        </>
    )
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

Component.displayName = "Course"