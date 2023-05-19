import { Outlet, json, useLocation } from "react-router-dom";
import { useListCourseQuery } from "../../../common/queries/course.queries";
import CourseTable from "../../../common/components/datatable/course.table";
import UserTable from "../../../common/components/datatable/user.table";

export function Component() {
    // const { data, isLoading, isError, error} = useListCourseQuery();
    const location = useLocation();

    // if(isError){
    //   json(
    //     {message: error},
    //     {status: 500}
    //   )
    // }
    
    return(
        <>
        {
         location.pathname === "/admin/user" || location.pathname === "/admin/user/" ? 
         <>
         <UserTable data={undefined} isLoading={false} enableHeader={true} />
         </>
         :
         <Outlet />
        }
        </>
    )
}

Component.displayName = "UserPage"