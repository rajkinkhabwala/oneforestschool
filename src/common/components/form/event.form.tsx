import { Event } from "../../../API";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import {
  Box,
  Button,
  Grid,
  Group,
  MultiSelect,
  NumberInput,
  Select,
  SimpleGrid,
  Switch,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { RRule } from "rrule";
import { createCalendarEvents } from "../../api/calendar/events/events";
import { useMutation } from "react-query";
import { createEvent } from "../../api/event/event.api";
import { EventFormType } from "./form";
import { updateCourse } from "../../api/course/course.api";
import { useGoogleLogin } from "@react-oauth/google";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";

export default function EventForm({
  formType,
  record,
  course,
}: EventFormType<Event>) {

  dayjs.extend(timezone);

  const login = useGoogleLogin({
    onSuccess(tokenResponse) {
      console.log(tokenResponse);
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/calendar",
  });

  

  const createCalendarMutation = useMutation({
    mutationFn: createCalendarEvents,
  });

  const createEventMutation = useMutation({
    mutationFn: createEvent,
  });

  const updateCourseMutation = useMutation({
    mutationFn: updateCourse,
  });

  const submitEventForm = useForm({
    initialValues: {
      summary: "",
      description: "",
      startDateTime: null,
      startTimeZone: dayjs.tz,
      endTimeZone:  dayjs.tz,
      endDateTime: "",
      isRecurrence: false,
      freq: 1,
      count: null,
      byweekday: null,
      interval: 1,
      until: course?.end_date
    },
  });

  function handleEvent(value: any) {
    
    createCalendarMutation.mutate(value, {
      onSuccess(data: any, variables, context) {
        
      },
    });
  }



  return (
    <form onSubmit={submitEventForm.onSubmit((value) => handleEvent(value))}>
      <Button onClick={() => login()}>Login with google</Button>
      {formType === "edit" ? (
        <Title order={2} size="h2" weight={600}>
          Edit Event
        </Title>
      ) : (
        <Title order={2} size="h2" weight={600}>
          Create Event
        </Title>
      )}
      <Box>
        <TextInput
          placeholder="Enter event title"
          label="Event Title"
          withAsterisk
          {...submitEventForm.getInputProps("summary")}
        />
        
        <Grid mt="md">
          <Grid.Col span={6}>
            <DateTimePicker
              label="Pick date and time"
              placeholder="Pick date and time"
              defaultValue={new Date()}
              minDate={dayjs(course?.start_date).toDate()}
              maxDate={submitEventForm.values.endDateTime ? dayjs(submitEventForm.values.endDateTime).toDate() :dayjs(course?.end_date).toDate()}
              {...submitEventForm.getInputProps("startDateTime")}
            />
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <DateTimePicker
              label="Pick date and time"
              placeholder="Pick date and time"
              defaultValue={new Date()}
              minDate={submitEventForm.values.startDateTime ? dayjs(submitEventForm.values.startDateTime).toDate() :dayjs(course?.start_date).toDate()}
              maxDate={dayjs(course?.end_date).toDate()}
              {...submitEventForm.getInputProps("endDateTime")}
            />
          </Grid.Col>
        </Grid>

        <SimpleGrid
          cols={1}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Textarea
            withAsterisk
            required
            label="Event Description"
            {...submitEventForm.getInputProps("description")}
          />
          <Switch
            label="Do you want to repeat"
            {...submitEventForm.getInputProps('isRecurrence')}
          />
        </SimpleGrid>

        
          {
            submitEventForm.values.isRecurrence ? 
            <>
            <Select
                label="Choose when will your event repeat"
                placeholder="Pick one frequency"
                required
                {...submitEventForm.getInputProps('freq')}
                data={[
                  { label: "Yearly", value: RRule.YEARLY as any },
                  { label: "Monthly", value: RRule.MONTHLY as any },
                  { label: "Weekly", value: RRule.WEEKLY as any },
                  { label: "Daily", value: RRule.DAILY as any },
                ]} />
            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
              >
            <NumberInput
            label="Internal"
            placeholder="Interval you want"
            required
            {...submitEventForm.getInputProps('interval')}
          />
          {
            submitEventForm.values.freq === RRule.WEEKLY ?
            <MultiSelect
            label="Days you want"
            placeholder="Days you want event to be"
            required
            {...submitEventForm.getInputProps('byweekday')}
            data={[
              { value: RRule.MO.weekday.toString(), label: "Monday" },
              { value: RRule.TU.weekday.toString(), label: "Tuesday" },
              { value: RRule.WE.weekday.toString(), label: "Wednesday" },
              { value: RRule.TH.weekday.toString(), label: "Thursday" },
              { value: RRule.FR.weekday.toString(), label: "Friday" },
              { value: RRule.SA.weekday.toString(), label: "Saturday" },
              { value: RRule.SU.weekday.toString(), label: "Sunday" },
            ]}
          /> :
          <></>

          }
          
          </SimpleGrid>
            </>
            :
            <></>
          }
          

          {/* <NumberInput
            label="Number of Events you want"
            placeholder="Number of Events you want"
            name="count"
            required
            {...submitEventForm.getInputProps('count')}
          /> */}
        
          {/* <NumberInput
            label="Internal"
            placeholder="Interval you want"
            name="count"
            required
            value={ruleOptions.interval ? ruleOptions.interval : ""}
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
            required
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
          /> */}
        
      </Box>

      <Group position="center" mt="xl">
        <Button size="md" type="submit">
          Send message
        </Button>
      </Group>
    </form>
  );
}
