// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Notification, Course, Department, Event, CourseUsers } = initSchema(schema);

export {
  User,
  Notification,
  Course,
  Department,
  Event,
  CourseUsers
};