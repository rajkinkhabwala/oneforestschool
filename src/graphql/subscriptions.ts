/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateCourseUsers = /* GraphQL */ `
  subscription OnCreateCourseUsers(
    $filter: ModelSubscriptionCourseUsersFilterInput
  ) {
    onCreateCourseUsers(filter: $filter) {
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
export const onUpdateCourseUsers = /* GraphQL */ `
  subscription OnUpdateCourseUsers(
    $filter: ModelSubscriptionCourseUsersFilterInput
  ) {
    onUpdateCourseUsers(filter: $filter) {
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
export const onDeleteCourseUsers = /* GraphQL */ `
  subscription OnDeleteCourseUsers(
    $filter: ModelSubscriptionCourseUsersFilterInput
  ) {
    onDeleteCourseUsers(filter: $filter) {
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
