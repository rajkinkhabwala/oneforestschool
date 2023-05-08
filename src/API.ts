/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  Notifications?: ModelNotificationConnection | null,
  Courses?: ModelCourseUsersConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  title?: string | null,
  message?: string | null,
  courseID?: string | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseUsersConnection = {
  __typename: "ModelCourseUsersConnection",
  items:  Array<CourseUsers | null >,
  nextToken?: string | null,
};

export type CourseUsers = {
  __typename: "CourseUsers",
  id: string,
  userId: string,
  courseId: string,
  user: User,
  course: Course,
  createdAt: string,
  updatedAt: string,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  code: string,
  visibility: boolean,
  start_date?: string | null,
  end_date?: string | null,
  description?: string | null,
  main_image?: string | null,
  images?: Array< string | null > | null,
  credit?: number | null,
  departmentID?: string | null,
  event?: string | null,
  Users?: ModelCourseUsersConnection | null,
  Notifications?: ModelNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  phone?: string | null,
  address?: string | null,
  picture?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  title?: string | null,
  message?: string | null,
  courseID?: string | null,
  userID?: string | null,
};

export type ModelNotificationConditionInput = {
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNotificationInput = {
  id: string,
  title?: string | null,
  message?: string | null,
  courseID?: string | null,
  userID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  code: string,
  visibility: boolean,
  start_date?: string | null,
  end_date?: string | null,
  description?: string | null,
  main_image?: string | null,
  images?: Array< string | null > | null,
  credit?: number | null,
  departmentID?: string | null,
  event?: string | null,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  visibility?: ModelBooleanInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  main_image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  departmentID?: ModelIDInput | null,
  event?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  visibility?: boolean | null,
  start_date?: string | null,
  end_date?: string | null,
  description?: string | null,
  main_image?: string | null,
  images?: Array< string | null > | null,
  credit?: number | null,
  departmentID?: string | null,
  event?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
  code: string,
  description?: string | null,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type Department = {
  __typename: "Department",
  id: string,
  name: string,
  code: string,
  description?: string | null,
  Courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  description?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type CreateCourseUsersInput = {
  id?: string | null,
  userId: string,
  courseId: string,
};

export type ModelCourseUsersConditionInput = {
  userId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  and?: Array< ModelCourseUsersConditionInput | null > | null,
  or?: Array< ModelCourseUsersConditionInput | null > | null,
  not?: ModelCourseUsersConditionInput | null,
};

export type UpdateCourseUsersInput = {
  id: string,
  userId?: string | null,
  courseId?: string | null,
};

export type DeleteCourseUsersInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  visibility?: ModelBooleanInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  main_image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  departmentID?: ModelIDInput | null,
  event?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<Department | null >,
  nextToken?: string | null,
};

export type ModelCourseUsersFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  and?: Array< ModelCourseUsersFilterInput | null > | null,
  or?: Array< ModelCourseUsersFilterInput | null > | null,
  not?: ModelCourseUsersFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionBooleanInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  main_image?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  credit?: ModelSubscriptionIntInput | null,
  departmentID?: ModelSubscriptionIDInput | null,
  event?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionCourseUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCourseUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseUsersFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseUsersMutationVariables = {
  input: CreateCourseUsersInput,
  condition?: ModelCourseUsersConditionInput | null,
};

export type CreateCourseUsersMutation = {
  createCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseUsersMutationVariables = {
  input: UpdateCourseUsersInput,
  condition?: ModelCourseUsersConditionInput | null,
};

export type UpdateCourseUsersMutation = {
  updateCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseUsersMutationVariables = {
  input: DeleteCourseUsersInput,
  condition?: ModelCourseUsersConditionInput | null,
};

export type DeleteCourseUsersMutation = {
  deleteCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      title?: string | null,
      message?: string | null,
      courseID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      code: string,
      description?: string | null,
      Courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseUsersQueryVariables = {
  id: string,
};

export type GetCourseUsersQuery = {
  getCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseUsersQueryVariables = {
  filter?: ModelCourseUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseUsersQuery = {
  listCourseUsers?:  {
    __typename: "ModelCourseUsersConnection",
    items:  Array< {
      __typename: "CourseUsers",
      id: string,
      userId: string,
      courseId: string,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByCourseIDQueryVariables = {
  courseID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByCourseIDQuery = {
  notificationsByCourseID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      title?: string | null,
      message?: string | null,
      courseID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByUserIDQuery = {
  notificationsByUserID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      title?: string | null,
      message?: string | null,
      courseID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByDepartmentIDQueryVariables = {
  departmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByDepartmentIDQuery = {
  coursesByDepartmentID?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseUsersByUserIdQuery = {
  courseUsersByUserId?:  {
    __typename: "ModelCourseUsersConnection",
    items:  Array< {
      __typename: "CourseUsers",
      id: string,
      userId: string,
      courseId: string,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseUsersByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseUsersByCourseIdQuery = {
  courseUsersByCourseId?:  {
    __typename: "ModelCourseUsersConnection",
    items:  Array< {
      __typename: "CourseUsers",
      id: string,
      userId: string,
      courseId: string,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        name?: string | null,
        phone?: string | null,
        address?: string | null,
        picture?: string | null,
        description?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    phone?: string | null,
    address?: string | null,
    picture?: string | null,
    description?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    title?: string | null,
    message?: string | null,
    courseID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    code: string,
    visibility: boolean,
    start_date?: string | null,
    end_date?: string | null,
    description?: string | null,
    main_image?: string | null,
    images?: Array< string | null > | null,
    credit?: number | null,
    departmentID?: string | null,
    event?: string | null,
    Users?:  {
      __typename: "ModelCourseUsersConnection",
      items:  Array< {
        __typename: "CourseUsers",
        id: string,
        userId: string,
        courseId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      items:  Array< {
        __typename: "Notification",
        id: string,
        title?: string | null,
        message?: string | null,
        courseID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    code: string,
    description?: string | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        code: string,
        visibility: boolean,
        start_date?: string | null,
        end_date?: string | null,
        description?: string | null,
        main_image?: string | null,
        images?: Array< string | null > | null,
        credit?: number | null,
        departmentID?: string | null,
        event?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseUsersSubscriptionVariables = {
  filter?: ModelSubscriptionCourseUsersFilterInput | null,
};

export type OnCreateCourseUsersSubscription = {
  onCreateCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseUsersSubscriptionVariables = {
  filter?: ModelSubscriptionCourseUsersFilterInput | null,
};

export type OnUpdateCourseUsersSubscription = {
  onUpdateCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseUsersSubscriptionVariables = {
  filter?: ModelSubscriptionCourseUsersFilterInput | null,
};

export type OnDeleteCourseUsersSubscription = {
  onDeleteCourseUsers?:  {
    __typename: "CourseUsers",
    id: string,
    userId: string,
    courseId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      phone?: string | null,
      address?: string | null,
      picture?: string | null,
      description?: string | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      Courses?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      code: string,
      visibility: boolean,
      start_date?: string | null,
      end_date?: string | null,
      description?: string | null,
      main_image?: string | null,
      images?: Array< string | null > | null,
      credit?: number | null,
      departmentID?: string | null,
      event?: string | null,
      Users?:  {
        __typename: "ModelCourseUsersConnection",
        nextToken?: string | null,
      } | null,
      Notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
