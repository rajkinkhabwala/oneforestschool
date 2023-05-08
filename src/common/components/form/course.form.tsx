import { useForm } from "@mantine/form";
import { Course } from "../../../API";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { CreateCourseInput } from "../../../API";
import { UpdateCourseInput } from "../../../API";
import {
  Box,
  Button,
  Group,
  Loader,
  MultiSelect,
  NumberInput,
  Select,
  SimpleGrid,
  Switch,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { RRule, Options, Frequency } from "rrule";
import { useState } from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { createEvents } from "../../api/calendar/events/events";
import { useId } from "@mantine/hooks";
import { useListDepartmentQuery } from "../../queries/department.queries";
import { Department } from "../../../API";
import { useMutation } from "react-query";
import { createCourse } from "../../api/course/course.api";
import { notifications } from "@mantine/notifications";
import { Auth } from "aws-amplify";
import {CognitoHostedUIIdentityProvider} from "@aws-amplify/auth"

export default function CourseForm({ formType, record }: FormModal<Course>) {
  dayjs.extend(timezone);
  const id = useId().split("-");

  const [eventVisible, setEventVisible] = useState(false);

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
      start_date: dayjs(record?.start_date).toDate().toISOString(),
      end_date: dayjs(record?.end_date).toDate().toISOString(),
      main_image: record?.main_image,
      departmentID: record?.departmentID,
    },
  });

  const { data, isLoading, error, isError } = useListDepartmentQuery();

  const [ruleOptions, setRuleOptions] = useState<Partial<Options>>({
    freq: 1,
    interval: 2,
  });

  const rule = new RRule(ruleOptions);

  const createMutation = useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createCourse
  })

  function handleSubmit(values: CreateCourseInput) {
    const rstring = rule.toString();
    const event = {
      "summary": values.name + "-" + values.code + " Class",
      "description": values.description,
      "end": {
        "dateTime": values.end_date,
        "timeZone": dayjs.tz.guess(),
      },
      "start": {
        "dateTime": values.start_date,
        "timeZone": dayjs.tz.guess(),
      },
      "recurrence": [rstring],
      "reminders": {
        "useDefault": false,
        "overrides": [
          { "method": "email", "minutes": 24 * 60 },
          { "method": "popup", "minutes": 10 },
        ],
      },
      "conferenceData": {
        "createRequest": {
          "conferenceSolutionKey": {
            "type": "hangoutsMeet",
          },
          "requestId": id[1],
        },
      },
    };
    const params = {
      "conferenceDataVersion": 1
    }

    createEvents("primary",params, event)
      .then((value) => {
      //   let fdata: CreateCourseInput = {
      //     ...values,
      //     event: value.data
      //   }
      //   console.log(fdata)
      //   window.setTimeout(() => {
      //     createMutation.mutate(fdata, {
      //   onSuccess(data, variables, context) {
      //     notifications.show({
      //       title: "Success",
      //       message: `Course Created: ${data.data?.createCourse?.name}`,
      //       color: "green",
      //     });
      //   },
      // })
      //   }, 500)
      })
      .catch((error) => {
        console.log(error)
        if(error.status === "UNAUTHENTICATED"){
          Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google
          })
      }});
      
      
  }

  function handleEdit(values: UpdateCourseInput){
    console.log(values)
  }

  return (
    <form onSubmit={formType === "new" ? submitForm.onSubmit((values) => handleSubmit(values)) : editForm.onSubmit((values) => handleEdit(values))}>
      {formType === "edit" ? (
        <Title order={2} size="h2" weight={600}>
          Get in touch
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
        <Switch
          label="want to have google calendar event?"
          checked={eventVisible}
          onChange={(event) => setEventVisible(event.target.checked)}
        />
      </SimpleGrid>
      {eventVisible ? (
        <Box>
          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Select
              label="Pick your Frequency"
              placeholder="Pick one frequency"
              value={ruleOptions.freq?.toString()}
              required={eventVisible ? true : false}
              onChange={(value) => {
                window.setTimeout(() => {
                  setRuleOptions({
                    ...ruleOptions,
                    freq: value as any as Frequency,
                  });
                });
              }}
              data={[
                { label: "Yearly", value: RRule.YEARLY.toString() },
                { label: "Monthly", value: RRule.MONTHLY.toString() },
                { label: "Weekly", value: RRule.WEEKLY.toString() },
                { label: "Daily", value: RRule.DAILY.toString() },
              ]}
            />

            <NumberInput
              label="Count"
              placeholder="Number of occurence will be generated"
              name="count"
              required={eventVisible ? true : false}
              value={ruleOptions.count ? ruleOptions.count : 0}
              defaultValue={0}
              onChange={(value) => {
                window.setTimeout(() => {
                  setRuleOptions({
                    ...ruleOptions,
                    count: Number(value),
                  });
                }, 500);
              }}
            />
          </SimpleGrid>
          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <NumberInput
              label="Internal"
              placeholder="Interval you want"
              name="count"
              required={eventVisible ? true : false}
              value={ruleOptions.interval ? ruleOptions.interval : 0}
              defaultValue={0}
              onChange={(value) => {
                window.setTimeout(() => {
                  setRuleOptions({
                    ...ruleOptions,
                    interval: Number(value),
                  });
                });
              }}
            />

            <MultiSelect
              label="Days you want"
              placeholder="Days you want event to be"
              required={eventVisible ? true : false}
              onChange={(value: any) => {
                window.setTimeout(() => {
                  setRuleOptions({
                    ...ruleOptions,
                    byweekday: value,
                  });
                });
              }}
              data={[
                { value: RRule.MO.weekday.toString(), label: "Monday" },
                { value: RRule.TU.weekday.toString(), label: "Tuesday" },
                { value: RRule.WE.weekday.toString(), label: "Wednesday" },
                { value: RRule.TH.weekday.toString(), label: "Thursday" },
                { value: RRule.FR.weekday.toString(), label: "Friday" },
                { value: RRule.SA.weekday.toString(), label: "Saturday" },
                { value: RRule.SU.weekday.toString(), label: "Sunday" },
              ]}
            />
          </SimpleGrid>
        </Box>
      ) : (
        <></>
      )}
      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {formType === "new" ? (
          <Select
            {...submitForm.getInputProps("departmentID")}
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
        )}
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
          Send message
        </Button>
      </Group>
    </form>
  );
}
