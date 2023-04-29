// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationContext = {
  "DEPARTMENT": "DEPARTMENT",
  "COURSE": "COURSE",
  "USER": "USER"
};

const { Notification } = initSchema(schema);

export {
  Notification,
  NotificationContext
};