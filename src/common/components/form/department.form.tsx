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
import { FormModal } from "./form";
import { LazyDepartment } from "../../../models";




function DepartmentForm({ formType, record }: FormModal<LazyDepartment>) {

  let submitForm = useForm<CreateDepartmentInput>({
    initialValues: {
      name: "",
      code: "",
      description: "",
    },
  })

  let updateForm = useForm<UpdateDepartmentInput>({
    initialValues: {
      id: record?.id!,
      name: record?.name,
      code: record?.code,
      description: record?.description
    }
  })

  
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createDepartment,
  });

  const updateMutation = useMutation({
    mutationFn: updateDepartment
  });

  function handleSubmit(values: CreateDepartmentInput) {
    createMutation.mutate(values, {
      onSuccess(data) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully added ${data?.name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['departments'] })
      submitForm.reset();
      },
    });
    
  }

  function handleEdit(values: UpdateDepartmentInput) {
    updateMutation.mutate(values, {
      onSuccess(data) {
        
        notifications.show({
          title: "Successful",
          message: `Successfully edited ${data?.name}`,
          color: "green",
        }); 

      queryClient.invalidateQueries({ queryKey: ['departments'] })
      
      },
    });
  }

  
    

  return (
    <form
      onSubmit={
        formType === "new"
          ? submitForm.onSubmit(handleSubmit)
          : updateForm.onSubmit(handleEdit)
      }
    >
      <TextInput
        withAsterisk
        label="Department Name"
        placeholder="Enter the department name..."
        required
        {...formType === "edit" ? updateForm.getInputProps("name") : submitForm.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Department Code"
        placeholder="Enter the department code..."
        required
        {...formType === "edit" ? updateForm.getInputProps("code") : submitForm.getInputProps("code")}
      />
      <Textarea
        placeholder="Department Description"
        label="Enter the department description"
        {...formType === "edit" ? updateForm.getInputProps("description") : submitForm.getInputProps("description")}
      />

    
      <Group position="right" mt="md">
        <Button type="submit">{formType === "new" ? "Create Department" : "Edit Department"}</Button>
      </Group>
    </form>
  );
}

export default DepartmentForm;
