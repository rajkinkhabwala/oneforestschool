import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  CreateDepartmentInput,
  Department,
  UpdateDepartmentInput,
} from "../../../API";
import {
  createDepartment,
  updateDepartment,
} from "../../api/department/department.api";
import { useMutation, useQueryClient } from "react-query";
import { DepartmentFormType } from "./form";


function DepartmentForm({ formType, record, editState, setEditState}: DepartmentFormType<Department>) {

  let form = useForm<any>({
    initialValues:
      formType === "new"
        ? {
            name: "",
            code: "",
            description: "",
          }
        : {
            name: record?.name,
            code: record?.code,
            description: record?.description ? record?.description : "",
          },
  });

  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createDepartment,
  });

  const updateMutation = useMutation({
    mutationFn: updateDepartment
  });

  function handleSubmit(values: CreateDepartmentInput) {
    createMutation.mutate(values, {
      onSuccess(data, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully added ${data.data?.createDepartment?.name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['departments'] })
      form.reset();
      },
    });
    
  }

  function handleEdit(values: UpdateDepartmentInput) {
    updateMutation.mutate(values, {
      onSuccess(data, variables, context) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully edited ${data.data?.updateDepartment?.name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['department'] })
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
        label="Department Name"
        placeholder="Enter the department name..."
        required
        disabled={formType === "edit" ?editState === "edit" ? false : true : false}
        {...form.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Department Code"
        placeholder="Enter the department code..."
        required
        disabled={formType === "edit" ?editState === "edit" ? false : true : false}
        {...form.getInputProps("code")}
      />
      <Textarea
        placeholder="Department Description"
        label="Enter the department description"
        disabled={formType === "edit" ?editState === "edit" ? false : true : false}
        {...form.getInputProps("description")}
      />

    {
      formType === "new" ?
      <Group position="right" mt="md">
        <Button type="submit">Create Department</Button>
      </Group>
      :
      <></>
    }
    {
      editState === "edit" ?
      <Group position="right" mt="md">
        <Button type="submit">Edit Department</Button>
      </Group>
      : 
      <></>
    }
      
    </form>
    </>
  );
}

export default DepartmentForm;
