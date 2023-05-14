import DepartmentForm from "../../../common/components/form/department.form";
import { useParams } from "react-router-dom";
import { useDepartmentQuery } from "../../../common/queries/department.queries";
import { Loader } from "@mantine/core";
import { Tabs } from "@mantine/core";

import CourseTable from "../../../common/components/datatable/course.table";

export function Component() {
    const params = useParams();

    const { data, isLoading } = useDepartmentQuery(params.id!);

    if (isLoading) {
        return (
            <Loader/>
        )
    }
    return (
        <Tabs defaultValue="Edit">
            <Tabs.List>
            <Tabs.Tab value="Edit">Edit</Tabs.Tab>
            <Tabs.Tab value="courses">Courses</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Edit" pt="xl">
                <DepartmentForm record={data!} formType={"edit"} />
        </Tabs.Panel>
        <Tabs.Panel value="courses" pt="xl">
            <CourseTable data={data?.Courses as any} isLoading={isLoading} enableHeader={false} />
        </Tabs.Panel>
            </Tabs>

    )

}
Component.displayName = "SingleDepartment"