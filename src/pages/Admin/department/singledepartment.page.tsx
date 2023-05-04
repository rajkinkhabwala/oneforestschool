import { Outlet, json, useLocation } from "react-router-dom"
import { useListDepartmentQuery } from "../../../common/queries/department.queries";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";
import { isAuthorized } from "../../../common/helpers/auth";

export function Component(){
    const { data, isLoading, isError, error} = useListDepartmentQuery();
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
         View Department Component
         </>
    )

}
Component.displayName = "SingleDepartment"