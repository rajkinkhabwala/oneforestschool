import { useQuery } from "react-query";
import { getUser, listUser } from "../api/user/user.api";

export function useListUserQuery() {
    return useQuery(["courses"], () =>
        listUser(),
        {
        refetchOnWindowFocus: false,
        }
      );
    }
    
    export function useUserQuery(id: string) {
      return useQuery(["user",id], () => getUser(id));
    }