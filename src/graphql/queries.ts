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
        }
        Courses {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      event
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
        event
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
          event
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        event
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          event
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
        event
        Users {
          nextToken
        }
        Notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
          event
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
          event
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
