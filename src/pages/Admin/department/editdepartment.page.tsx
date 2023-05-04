import { Outlet, json, useLocation } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";
import { useListDepartmentQuery } from "../../../common/queries/department.queries";

export function Component() {
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
         Edit Department Component
         </>
    )
}

Component.displayName = "DepartmentEdit"