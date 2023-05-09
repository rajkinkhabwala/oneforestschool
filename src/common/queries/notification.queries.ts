import {useQuery} from "react-query";
import { listNotification, getNotification } from "../api/notification/notification.api";

export function useListNotificationQuery() {
    return useQuery(["notification"], () =>
        listNotification(),
        {
        refetchOnWindowFocus: false,
        }
      );
}

export function useNotificationQuery(id: string) {
      return useQuery(["notification",id], () => getNotification(id));
}