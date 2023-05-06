import { Outlet,  json,  useLocation } from "react-router-dom";
import { useListDepartmentQuery } from "../../../common/queries/department.queries";
import { apiError } from "../../../common/constants/errors/errors";
import DepartmentTable from "../../../common/components/datatable/department.table";

export function Component(){

    const location = useLocation();
    const { data, isLoading, isError, error} = useListDepartmentQuery();

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
        <DepartmentTable data={data} isLoading={isLoading} enableHeader={true} />
        </>
        :
        <Outlet />
       }
       </>
    )

}

Component.displayName = "DepartmentPage"
