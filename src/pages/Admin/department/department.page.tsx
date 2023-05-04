import { Outlet, json, useLocation } from "react-router-dom";
import { isAuthorized } from "../../../common/helpers/auth";
import { notAuthorized } from "../../../common/constants/errors/errors";

export async function loader(){

    const value = await isAuthorized(["Admins"])

    if(value){
        return value;
    } 
    console.log(value)
    json({
        message: notAuthorized
    }, {
        status: 401,
        statusText: "UNAUTHORIZATION"
    })
}

export function DepartmentPage(){

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
