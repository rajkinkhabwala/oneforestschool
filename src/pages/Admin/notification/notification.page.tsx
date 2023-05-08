import { Outlet,  json,  useLocation } from "react-router-dom";
import { useListNotificationQuery } from "../../../common/queries/notification.queries";
import { apiError } from "../../../common/constants/errors/errors";
import NotificationTable from "../../../common/components/datatable/notification.table";

export function Component(){

    const location = useLocation();
    const { data, isLoading, isError, error} = useListNotificationQuery();

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
        location.pathname === "/admin/notification" ? 
        <>
        <NotificationTable data={data} isLoading={isLoading} enableHeader={false} />
        </>
        :
        <Outlet />
       }
       </>
    )

}

Component.displayName = "NotificationPage"
