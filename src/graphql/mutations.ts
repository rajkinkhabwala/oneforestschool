/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      address
      picture
      description
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      title
      message
      courseID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      title
      message
      courseID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      title
      message
      courseID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      code
      visibility
      start_date
      end_date
      description
      main_image
      images
      credit
      departmentID
      Event {
        id
        event
        Course {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        createdAt
        updatedAt
        eventCourseId
      }
      Users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      courseEventId
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      code
      visibility
      start_date
      end_date
      description
      main_image
      images
      credit
      departmentID
      Event {
        id
        event
        Course {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        createdAt
        updatedAt
        eventCourseId
      }
      Users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      courseEventId
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      code
      visibility
      start_date
      end_date
      description
      main_image
      images
      credit
      departmentID
      Event {
        id
        event
        Course {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        createdAt
        updatedAt
        eventCourseId
      }
      Users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      Notifications {
        items {
          id
          title
          message
          courseID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      courseEventId
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      code
      description
      Courses {
        items {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      code
      description
      Courses {
        items {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      code
      description
      Courses {
        items {
          id
          name
          code
          visibility
          start_date
          end_date
          description
          main_image
          images
          credit
          departmentID
          createdAt
          updatedAt
          courseEventId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      event
      Course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
      eventCourseId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      event
      Course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
      eventCourseId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      event
      Course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
      eventCourseId
    }
  }
`;
export const createCourseUsers = /* GraphQL */ `
  mutation CreateCourseUsers(
    $input: CreateCourseUsersInput!
    $condition: ModelCourseUsersConditionInput
  ) {
    createCourseUsers(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        email
        name
        phone
        address
        picture
        description
        Notifications {
          nextToken
        }
        Courses {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseUsers = /* GraphQL */ `
  mutation UpdateCourseUsers(
    $input: UpdateCourseUsersInput!
    $condition: ModelCourseUsersConditionInput
  ) {
    updateCourseUsers(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        email
        name
        phone
        address
        picture
        description
        Notifications {
          nextToken
        }
        Courses {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseUsers = /* GraphQL */ `
  mutation DeleteCourseUsers(
    $input: DeleteCourseUsersInput!
    $condition: ModelCourseUsersConditionInput
  ) {
    deleteCourseUsers(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        email
        name
        phone
        address
        picture
        description
        Notifications {
          nextToken
        }
        Courses {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      course {
        id
        name
        code
        visibility
        start_date
        end_date
        description
        main_image
        images
        credit
        departmentID
        Event {
          id
          event
          createdAt
          updatedAt
          eventCourseId
        }
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
        courseEventId
      }
      createdAt
      updatedAt
    }
  }
`;
