import { useToggle } from "@mantine/hooks";
import { json, useParams } from "react-router-dom";
import { Loader } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import { useCourseQuery } from "../../../common/queries/course.queries";
import EventForm from "../../../common/components/form/event.form";
import CourseForm from "../../../common/components/form/course.form";

export function Component() {
    const [value, toggle] = useToggle(['edit', 'view']);

    const params = useParams();

    const { data, isLoading, isError, error } = useCourseQuery(params.id!);

    if(isError){
        throw json(error, {
            "status": 404,
            "statusText": "Not Found"
        })
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }
    
    return (
        <Tabs defaultValue="Edit">
            <Tabs.List>
            <Tabs.Tab value="Edit">Details</Tabs.Tab>
            <Tabs.Tab value="event" icon={<IconMessageCircle size="0.8rem" />}>Event</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Edit" pt="xl">
                {/* Course Table to be added */}
                <CourseForm formType={"edit"} record={data?.data?.getCourse! as any}/>
        </Tabs.Panel>
        <Tabs.Panel value="event" pt="xl">
            <EventForm formType={"new"} course={data?.data!}/>
        </Tabs.Panel>
            </Tabs>



    )

}
Component.displayName = "SingleCourse"