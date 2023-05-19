import { Outlet, json, useLocation } from "react-router-dom";
import { useListCourseQuery } from "../../../common/queries/course.queries";
import CourseTable from "../../../common/components/datatable/course.table";

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
         location.pathname === "/admin/course" || location.pathname === "/admin/course/" ? 
         <>
         <CourseTable data={data} isLoading={isLoading} enableHeader={true} />
         </>
         :
         <Outlet />
        }
        </>
    )
}

Component.displayName = "CoursePage"