import { useForm } from "@mantine/form";
import { Course } from "../../../API";
import dayjs from "dayjs";
import { CreateCourseInput } from "../../../API";
import { UpdateCourseInput } from "../../../API";
import {
  Button,
  Group,
  Loader,
  NumberInput,
  Select,
  SimpleGrid,
  Switch,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { useListDepartmentQuery } from "../../queries/department.queries";
import { Department } from "../../../API";
import { useMutation, useQueryClient } from "react-query";
import { createCourse, updateCourse } from "../../api/course/course.api";
import { FormModal } from "./form";
import { notifications } from "@mantine/notifications";
import { LazyDepartment } from "../../../models";

export default function CourseForm({ formType, record }: FormModal<Course>) {
  const queryClient = useQueryClient()

  let submitForm = useForm<CreateCourseInput>({
    initialValues: {
      name: "",
      code: "",
      visibility: false,
      credit: 0,
      description: "",
      start_date: dayjs(new Date()).toDate() as any,
      end_date: dayjs(new Date()).add(1, "day").toDate() as any,
      main_image: "",
      images: null,
      departmentID: "",
    },
  });

  let editForm = useForm<UpdateCourseInput>({
    initialValues: {
      id: record?.id!,
      name: record?.name,
      code: record?.code,
      visibility: record?.visibility,
      credit: record?.credit,
      description: record?.description,
      start_date: dayjs(record?.start_date).toDate() as any,
      end_date: dayjs(record?.end_date).toDate() as any,
      main_image: record?.main_image,
      departmentID: record?.departmentID,
    },
  });

  const { data, isLoading, isError } = useListDepartmentQuery();

  
  const createMutation = useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createCourse
  })

  const updateMutation = useMutation({
    mutationKey: ["updateCourse"],
    mutationFn: updateCourse
  })

  function handleSubmit(values: CreateCourseInput) {

    createMutation.mutate(values, {
      onSuccess(data, variables, context) {
        notifications.show({
          title: "Successful",
          message: `Successfully added ${data.data?.createCourse?.name}`,
          color: "green",
        });
        queryClient.invalidateQueries({queryKey: ["courses"]})
        submitForm.reset()
      },
      onError(error, variables, context) {
        notifications.show({
          title: "Error",
          message: `Error adding ${variables.name}`,
          color: "red",
        });
      },
    })


      
  }

  function handleEdit(values: UpdateCourseInput){
    updateMutation.mutate(values, {
      onSuccess(data, variables, context) {
        notifications.show({
          title: "Successful",
          message: `Successfully updated ${data.data?.updateCourse?.name}`,
          color: "green",
        });
        queryClient.invalidateQueries({queryKey: ["courses"]})
      },
      onError(error, variables, context) {
        notifications.show({
          title: "Error",
          message: `Error updating ${variables.name}`,
          color: "red",
        });
      },
    })
  }

  return (
    <form onSubmit={formType === "new" ? submitForm.onSubmit((values) => handleSubmit(values)) : editForm.onSubmit((values) => handleEdit(values))}>
      {formType === "edit" ? (
        <Title order={2} size="h2" weight={600}>
          {record?.name}
        </Title>
      ) : (
        <Title order={2} size="h2" weight={600}>
          Create Course
        </Title>
      )}

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {formType === "new" ? (
          <>
            <TextInput
              label="Name"
              placeholder="Course name"
              name="name"
              {...submitForm.getInputProps("name")}
            />
            <TextInput
              label="Code"
              placeholder="Course Code"
              name="code"
              {...submitForm.getInputProps("code")}
            />
          </>
        ) : (
          <>
            <TextInput
              label="Name"
              placeholder="Course name"
              name="name"
              {...editForm.getInputProps("name")}
            />
            <TextInput
              label="Code"
              placeholder="Course Code"
              name="code"
              {...editForm.getInputProps("code")}
            />
          </>
        )}
      </SimpleGrid>
      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {formType === "new" ? (
          <>
            <NumberInput
              label="Credit"
              placeholder="Course Credit"
              name="credit"
              min={0}
              {...submitForm.getInputProps("credit")}
            />
            <DateTimePicker
              label="Start Date"
              placeholder="Pick start date"
              {...submitForm.getInputProps("start_date")}
            />
            <DateTimePicker
              label="End Date"
              placeholder="Pick end date"
              {...submitForm.getInputProps("end_date")}
            />
          </>
        ) : (
          <>
            <NumberInput
              label="Credit"
              placeholder="Course Credit"
              name="credit"
              min={0}
              {...editForm.getInputProps("credit")}
            />
            <DateTimePicker
              label="Start Date"
              placeholder="Pick start date"
              {...editForm.getInputProps("start_date")}
            />
            <DateTimePicker
              label="End Date"
              placeholder="Pick end date"
              {...editForm.getInputProps("end_date")}
            />
          </>
        )}
      </SimpleGrid>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {formType === "new" ? (
          <Switch
            label="show the course to students"
            {...submitForm.getInputProps("visibility")}
          />
        ) : (
          <Switch
            label="show the course to students"
            {...editForm.getInputProps("visibility")}
          />
        )}
      </SimpleGrid>
      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {/* {formType === "new" ? (
          <Select
            {...submitForm.getInputProps("departmentID")}
            label="Select department"
            rightSection={isLoading ? <Loader /> : null}
            error={isError ?? "Error fetching data..."}
            placeholder="Pick one department"
            data={
              isLoading
                ? [{ value: "", label: "" }]
                : data?.map((el: any) => ({
                    value: el.id,
                    label: el.name,
                  }))
            }
          />
        ) : (
          <Select
            {...editForm.getInputProps("departmentID")}
            label="Select department"
            rightSection={isLoading ? <Loader /> : null}
            error={isError ?? "Error fetching data..."}
            placeholder="Pick one department"
            data={
              isLoading
                ? [{ value: "", label: "" }]
                : data?.items.map((el: Department) => ({
                    value: el.id,
                    label: el.name,
                    selected: record?.departmentID ? record.departmentID : "",
                  }))
            }
          />
        )} */}
      </SimpleGrid>
      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {formType === "new" ? (
          <StorageManager
            acceptedFileTypes={["image/*"]}
            accessLevel="public"
            maxFileCount={1}
            isResumable
            onUploadSuccess={(event) => {
              submitForm.setFieldValue("main_image", event.key);
            }}
          />
        ) : (
          <StorageManager
            acceptedFileTypes={["image/*"]}
            accessLevel="public"
            maxFileCount={1}
            isResumable
            onUploadSuccess={(event) => {
              editForm.setFieldValue("main_image", event.key);
            }}
          />
        )}
      </SimpleGrid>
      {formType === "new" ? (
        <Textarea
          mt="md"
          label="Course Description"
          placeholder="Course Description"
          maxRows={10}
          minRows={5}
          autosize
          name="description"
          {...submitForm.getInputProps("description")}
        />
      ) : (
        <Textarea
          mt="md"
          label="Course Description"
          placeholder="Course Description"
          maxRows={10}
          minRows={5}
          autosize
          name="description"
          {...editForm.getInputProps("description")}
        />
      )}

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          {formType === "new" ? "Create Course" : "Update Course"}
        </Button>
      </Group>
    </form>
  );
}
