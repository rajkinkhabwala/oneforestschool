import { Outlet, json, useLocation } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";
import { useListDepartmentQuery } from "../../../common/queries/department.queries";

export function Component(){

    const location = useLocation();
    const { data, isLoading, isError, error} = useListDepartmentQuery();
    console.log(location)

    if(isError){
        json(
          {message: error},
          {status: 500,
          statusText: apiError}
        )
      }

    return(
         <>
         Create Department Component
         </>
    )
}

Component.displayName = "CreateDepartment"