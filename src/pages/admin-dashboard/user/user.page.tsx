import { Outlet, json, useLocation } from "react-router-dom";
import { useListCourseQuery } from "../../../common/queries/course.queries";
import CourseTable from "../../../common/components/datatable/course.table";
import UserTable from "../../../common/components/datatable/user.table";
import { useListUserQuery } from "../../../common/queries/user.queries";

export function Component() {
    const { data, isLoading, isError, error} = useListUserQuery();
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
         location.pathname === "/admin/user" || location.pathname === "/admin/user/" ? 
         <>
         <UserTable data={data} isLoading={isLoading} enableHeader={false} />
         </>
         :
         <Outlet />
        }
        </>
    )
}

Component.displayName = "UserPage"