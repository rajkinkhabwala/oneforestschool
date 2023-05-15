import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly description?: string | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly Courses?: (CourseUsers | null)[] | null;
  readonly google_refresh_token?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly description?: string | null;
  readonly Notifications: AsyncCollection<Notification>;
  readonly Courses: AsyncCollection<CourseUsers>;
  readonly google_refresh_token?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly courseID?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly courseID?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly visibility: boolean;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly description?: string | null;
  readonly main_image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly credit?: number | null;
  readonly departmentID?: string | null;
  readonly Event?: Event | null;
  readonly Users?: (CourseUsers | null)[] | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseEventId?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly visibility: boolean;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly description?: string | null;
  readonly main_image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly credit?: number | null;
  readonly departmentID?: string | null;
  readonly Event: AsyncItem<Event | undefined>;
  readonly Users: AsyncCollection<CourseUsers>;
  readonly Notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseEventId?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly description?: string | null;
  readonly Courses?: (Course | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly description?: string | null;
  readonly Courses: AsyncCollection<Course>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Department = LazyLoading extends LazyLoadingDisabled ? EagerDepartment : LazyDepartment

export declare const Department: (new (init: ModelInit<Department>) => Department) & {
  copyOf(source: Department, mutator: (draft: MutableModel<Department>) => MutableModel<Department> | void): Department;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event?: string | null;
  readonly Course?: Course | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventCourseId?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event?: string | null;
  readonly Course: AsyncItem<Course | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventCourseId?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerCourseUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly courseId?: string | null;
  readonly user: User;
  readonly course: Course;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourseUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly courseId?: string | null;
  readonly user: AsyncItem<User>;
  readonly course: AsyncItem<Course>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CourseUsers = LazyLoading extends LazyLoadingDisabled ? EagerCourseUsers : LazyCourseUsers

export declare const CourseUsers: (new (init: ModelInit<CourseUsers>) => CourseUsers) & {
  copyOf(source: CourseUsers, mutator: (draft: MutableModel<CourseUsers>) => MutableModel<CourseUsers> | void): CourseUsers;
}