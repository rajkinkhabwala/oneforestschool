import { LazyDepartment } from "../../../models";
import { UserGraphQLResult, CourseGraphQLResult, NotificationGraphQLResult} from "../../api/types/api"
import {DataTableColumn} from "mantine-datatable"

export type TableProps = {
    data: [] | undefined | null,
    isLoading: boolean,
    enableHeader: boolean,
    columns?: DataTableColumn<T>[];
}

export interface UserTableProps extends Omit<TableProps, "data"> {
    data: UserGraphQLResult | undefined | null,
}

export interface CourseTableProps extends Omit<TableProps, "data"> {
    data: CourseGraphQLResult | undefined | null
}

export interface DepartmentTableProps extends Omit<TableProps, "data"> {
    data: LazyDepartment[] | undefined
}

export interface NotificationTableProps extends Omit<TableProps, "data"> {
    data: NotificationGraphQLResult | undefined | null
}