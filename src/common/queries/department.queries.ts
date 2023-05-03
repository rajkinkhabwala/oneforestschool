import {useQuery} from "react-query";
import { listDepartment } from "../api/department/department.api";

export function useListDepartmentQuery() {
    return useQuery(["departments"], () =>
        listDepartment(),
        {
        refetchOnWindowFocus: false,
        }
      );
    }