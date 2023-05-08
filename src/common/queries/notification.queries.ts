import {useQuery} from "react-query";
import { listNotification } from "../api/notification/notification.api";

export function useListNotificationQuery() {
    return useQuery(["notification"], () =>
        listNotification(),
        {
        refetchOnWindowFocus: false,
        }
      );
    }