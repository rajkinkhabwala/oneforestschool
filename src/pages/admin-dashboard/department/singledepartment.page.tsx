import { useToggle } from "@mantine/hooks";
import DepartmentForm from "../../../common/components/form/department.form";
import { useParams } from "react-router-dom";
import { useDepartmentQuery, useListDepartmentQuery } from "../../../common/queries/department.queries";
import { getDepartment } from "../../../graphql/queries";
import { Department } from "../../../API";
import { Loader } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { IconMessageCircle, IconSettings } from "@tabler/icons-react";
import DepartmentTable from "../../../common/components/datatable/department.table";
import CourseTable from "../../../common/components/datatable/course.table";

export function Component() {
    const [value, toggle] = useToggle(['edit', 'view']);

    const params = useParams();

    const { data, isLoading } = useDepartmentQuery(params.id!);

    if (isLoading) {
        return (
            <Loader />
        )
    }
    
    return (
        <Tabs defaultValue="details">
            <Tabs.List>
            <Tabs.Tab value="details">Details</Tabs.Tab>
            <Tabs.Tab value="courses" icon={<IconMessageCircle size="0.8rem" />}>Courses</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="details" pt="xl">
                <DepartmentForm record={data?.data?.getDepartment!} formType={"edit"} editState={value} setEditState={toggle!} />
        </Tabs.Panel>
        <Tabs.Panel value="courses" pt="xl">
            <CourseTable data={data?.data?.getDepartment?.Courses as any} isLoading={isLoading} enableHeader={false} />
        </Tabs.Panel>
            </Tabs>

    )

}
Component.displayName = "SingleDepartment"