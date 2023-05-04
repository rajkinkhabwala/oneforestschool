import { DataTable } from "mantine-datatable"
import { tableStyles } from "./table.styles"

export default function UserTable() {
    const { classes, cx } = tableStyles()

    const data = [
        { course_code: 1, course_name: 'first course' },
        { course_code: 2, course_name: 'second course' }
    ]

    return (
        <DataTable
            className={classes.table}
            withBorder
            records={data}
            columns={[
                { accessor: "course_code", title: "Course Code" },
                { accessor: "course_name", title: "Course Name" },
            ]}
        />
    )

}