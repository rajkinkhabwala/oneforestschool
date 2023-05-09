import { Event } from "../../../API";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import {
  Box,
  Button,
  Group,
  MultiSelect,
  NumberInput,
  Select,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { RRule, Options, Frequency } from "rrule";
import { useState } from "react";
import { createCalendarEvents } from "../../api/calendar/events/events";
import { useId } from "@mantine/hooks";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import { createEvent } from "../../api/event/event.api";
import { EventFormType } from "./form";
import { notifications } from "@mantine/notifications";
import { updateCourse } from "../../api/course/course.api";


export default function EventForm({ formType, record, course }: EventFormType<Event>) {
  
  dayjs.extend(timezone);
  const id = useId().split("-");

  

  const [ruleOptions, setRuleOptions] = useState<Partial<Options>>({
    freq: 2,
    interval: 2,
  });

  const rule = new RRule(ruleOptions);

  const createCalendarMutation = useMutation({
    mutationFn: createCalendarEvents
  })

  const createEventMutation = useMutation({
    mutationFn: createEvent
  })

  const updateCourseMutation = useMutation({
    mutationFn: updateCourse
  })

  async function handleSubmit() {
    const rstring = rule.toString();
    const event = {
      "summary": course?.getCourse!.name + "-" + course?.getCourse!.code + " Class",
      "description": course?.getCourse!.description,
      "end": {
        "dateTime": course?.getCourse!.end_date,
        "timeZone": dayjs.tz.guess(),
      },
      "start": {
        "dateTime": course?.getCourse!.start_date,
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

    createCalendarMutation.mutate({calendar_id: "primary", params: params, body: event}, {
        onError(error: any, variables, context) {
            console.log("From OnError: ",error)

            if(error?.response.data.error.status === "UNAUTHENTICATED"){

               Auth.signOut()
            }

            notifications.show({
                title: "Error",
                message: "Error While making google calendar",
            })
        },

        onSuccess(data, variables, context) {
            console.log(data)
            const value = {
                event: JSON.stringify(data.data),
                eventCourseId: course?.getCourse!.id
            }
            
            createEventMutation.mutate(value, {

                onSuccess(data, variables, context) {
                  updateCourseMutation.mutate({id: course?.getCourse?.id!,courseEventId :data.data?.id!}, {
                    onSuccess(data, variables, context) {
                      notifications.show({
                        title: "Success",
                        message: "Success While making google calendar",
                    })
                    },
                    onError(error, variables, context) {
                      notifications.show({
                        title: "Error",
                        message: "Error While making google calendar",
                    })
                    },
                  })
                    
                },
            })
        },
    })
  }


  function removeEvent(){
    // Delete Logic needed to be done.
  }
  
  if(course?.getCourse?.Event?.id){
    return(
      <Button>Delete Event to Update Event</Button>
    )
  }

  
  return (
    <>
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
          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Select
              label="Pick your Frequency"
              placeholder="Pick one frequency"
              value={ruleOptions.freq?.toString()}
              required
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
              required
              value={ruleOptions.count ? ruleOptions.count : ""}
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
            />
          </SimpleGrid>
          
        </Box>
      
      <Group position="center" mt="xl">
        <Button size="md" onClick={() => handleSubmit()}>
          Send message
        </Button>
      </Group>
    </>
  );
}
