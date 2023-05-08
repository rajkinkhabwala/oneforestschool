import { Button, Group, Loader, Select, Switch, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  Course,
  CreateNotificationInput,
  Notification,
  UpdateNotificationInput,
} from "../../../API";
import {
  createNotification,
  updateNotification,
} from "../../api/notification/notification.api";
import { useMutation, useQueryClient } from "react-query";
import { listUser } from "../../api/user/user.api";
import { listCourse } from "../../api/course/course.api";
import { MultiSelect } from "@mantine/core";
import { useState, useEffect, SetStateAction } from "react";
import {useListCourseQuery} from "../../queries/course.queries";

function NotificationForm({ formType, record}: FormModal<Notification>) {

  interface Option {
    value: string;
    label: string;
  }

  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
            title: "",
            message: "",
            courseID: "",
            userID: ""
          }
        : {
            title: record?.title,
            message: record?.message,
            courseID: record?.courseID,
            userID: record?.userID
          },
  });  

  // const listUsers = listUser();
  // const listCourses = listCourse();

  // const { data, isError, isLoading} = useListCourseQuery(); 

  // function SelectValues() {
  //   const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  
  //   const handleSelectChange = (values: Option[]) => {
  //     setSelectedValues(values);
  //   };

  //   const options: Option[] = [
  //     { value: "User", label: "User" },
  //     { value: "Course", label: "Course" },
  //   ];
  const {data, isError, isLoading} = useListCourseQuery();

  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createNotification,
  });

  const updateMutation = useMutation({
    mutationFn: updateNotification
  });

  function handleSubmit(values: CreateNotificationInput) {
    createMutation.mutate(values, {
      onSuccess(data, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully added ${data.data?.createNotification?.title}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['notifications'] })
      form.reset();
      },
    });
    
  }

  function handleEdit(values: UpdateNotificationInput) {
    updateMutation.mutate(values, {
      onSuccess(data, variables, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully edited ${data.data?.updateNotification?.title}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['notifications'] })
      form.reset();
      },
    });
  }

  return (
    <form
      onSubmit={
        formType === "new"
          ? form.onSubmit(handleSubmit)
          : form.onSubmit(handleEdit)
      }
    >
      <TextInput
        withAsterisk
        label="Notification Title"
        placeholder="Enter the notification title..."
        required
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Notification Message"
        placeholder="Enter the notification message..."
        required
        {...form.getInputProps("message")}
      />
{/* 
      <Select
        {...form.getInputProps("courseID")}
        label="Select Course"
        rightSection={isLoading ? <Loader /> : null}
        error={isError ?? "Data is not fetched!"}
        placeholder="Pick one course"
        data={
          isLoading
            ? []
            : data?.items?.map((el: Notification) => ({
                value: el.courseID,
                label: el.courseID,
                selected: record ? record : null,
              })) ?? []
        }
      />

      <Select
        {...form.getInputProps("userID")}
        label="Select Users"
        rightSection={isLoading ? <Loader /> : null}
        error={isError ?? "Data is not fetched!"}
        placeholder="Pick one user"
        data={
          isLoading
            ? []
            : data?.items?.map((el: Notification) => ({
                value: el.userID,
                label: el.userID,
                selected: record ? record : null,
              })) ?? []
        }
      /> */}
      
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
export default NotificationForm;
