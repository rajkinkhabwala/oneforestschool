import { Outlet,  json,  useLocation } from "react-router-dom";
import { useListDepartmentQuery } from "../../../common/queries/department.queries";
import { isAuthorized } from "../../../common/helpers/auth";
import { apiError, notAuthorized } from "../../../common/constants/errors/errors";


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
       {
        location.pathname === "/admin/department" ? 
        <>
        Department Component
        </>
        :
        <Outlet />
       }
       </>
    )

}

Component.displayName = "DepartmentPage"
