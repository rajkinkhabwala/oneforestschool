import { useToggle } from "@mantine/hooks";
import DepartmentForm from "../../../common/components/form/department.form";
import { useParams } from "react-router-dom";
import { useListNotificationQuery, useNotificationQuery } from "../../../common/queries/notification.queries";
import { getNotification } from "../../../graphql/queries";
import { Department } from "../../../API";
import { Loader } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import DepartmentTable from "../../../common/components/datatable/department.table";
import CourseTable from "../../../common/components/datatable/course.table";
import NotificationForm from "../../../common/components/form/notification.form";

export function Component() {
    const [value, toggle] = useToggle(['edit', 'view']);
    const params = useParams();

    const { data, isLoading } = useNotificationQuery(params.id!);

    if (isLoading) {
        return (
            <Loader />
        )
    }
    console.log(data)
    return (
        <Tabs defaultValue="details">
            <Tabs.List>
            <Tabs.Tab value="details">Details</Tabs.Tab>
            <Tabs.Tab value="courses" icon={<IconMessageCircle size="0.8rem" />}>Courses</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="details" pt="xl">
                <NotificationForm record={data?.data?.getNotification!} formType={"edit"} editState={value} setEditState={toggle!} />
        </Tabs.Panel>
        <Tabs.Panel value="courses" pt="xl">
            <CourseTable data={data?.data?.getNotification?.courseID as any} isLoading={isLoading} enableHeader={false} />
        </Tabs.Panel>
            </Tabs>

    )

}

Component.displayName = "SingleDepartment"