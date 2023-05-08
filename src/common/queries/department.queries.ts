import {useQuery} from "react-query";
import { getDepartment, listDepartment } from "../api/department/department.api";

export function useListDepartmentQuery() {
    return useQuery(["departments"], () =>
        listDepartment(),
        {
        refetchOnWindowFocus: false,
        }
      );
    }

export function useDepartmentQuery(id: string) {
      return useQuery(["departments",id], () => getDepartment(id));
    }
    