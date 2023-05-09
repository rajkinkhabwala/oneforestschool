import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  CreateNotificationInput,
  Notification,
  UpdateNotificationInput,
} from "../../../API";
import {
  createNotification,
  updateNotification,
} from "../../api/notification/notification.api";
import { useMutation, useQueryClient } from "react-query";


function NotificationForm({ formType, record, editState, setEditState}: NotificationFormType<Notification>) {

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
    <>
    {
      formType === "edit"?
      <Button onClick={() => setEditState!()}>
        {editState}
      </Button>
      :
      <></>
    }
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
        disabled={formType === "edit" ?editState === "edit" ? false : true : false}
        required
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Notification Message"
        placeholder="Enter the notification message..."
        disabled={formType === "edit" ?editState === "edit" ? false : true : false}
        required
        {...form.getInputProps("message")}
      />

      {
          editState === "edit" ?
          <Group position="right" mt="md">
            <Button type="submit">Edit Notofication</Button>
          </Group>:
          <></>
      }
    </form>
    </>
  );
}
export default NotificationForm;
