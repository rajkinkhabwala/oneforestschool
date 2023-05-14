/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        phone
        address
        picture
        description
        Notifications {
          nextToken
          startedAt
        }
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        name
        phone
        address
        picture
        description
        Notifications {
          nextToken
          startedAt
        }
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      title
      message
      courseID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        message
        courseID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        message
        courseID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventCourseId
      }
      Users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseEventId
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Event {
          id
          event
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventCourseId
        }
        Users {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Event {
          id
          event
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventCourseId
        }
        Users {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        description
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDepartments = /* GraphQL */ `
  query SyncDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        code
        description
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          eventCourseId
        }
        Users {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventCourseId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventCourseId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventCourseId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourseUsers = /* GraphQL */ `
  query GetCourseUsers($id: ID!) {
    getCourseUsers(id: $id) {
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
          startedAt
        }
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          eventCourseId
        }
        Users {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCourseUsers = /* GraphQL */ `
  query ListCourseUsers(
    $filter: ModelCourseUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseUsers = /* GraphQL */ `
  query SyncCourseUsers(
    $filter: ModelCourseUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationsByCourseID = /* GraphQL */ `
  query NotificationsByCourseID(
    $courseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        message
        courseID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationsByUserID = /* GraphQL */ `
  query NotificationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        message
        courseID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const coursesByDepartmentID = /* GraphQL */ `
  query CoursesByDepartmentID(
    $departmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByDepartmentID(
      departmentID: $departmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        Event {
          id
          event
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventCourseId
        }
        Users {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const courseUsersByUserId = /* GraphQL */ `
  query CourseUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const courseUsersByCourseId = /* GraphQL */ `
  query CourseUsersByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseUsersByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
