import { Outlet,  useLocation } from "react-router-dom";


export function Component(){

    const location = useLocation();
    
    console.log(location)
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
