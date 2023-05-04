import { Outlet, json, useLocation } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";
import { useListCourseQuery } from "../../../common/queries/course.queries";

export function Component() {
    const { data, isLoading, isError, error} = useListCourseQuery();
    const location = useLocation();

    if(isError){
      json(
        {message: error},
        {status: 500, 
        statusText: apiError}
      )
    }

    return(
        <>
         View Course Component
        </>
    )
}

Component.displayName = "SingleCourse"