/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      title
      message
      context_id
      context
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      context_id
      context
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      context_id
      context
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
