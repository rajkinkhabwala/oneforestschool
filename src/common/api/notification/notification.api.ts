import { API } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import { CreateNotificationInput, UpdateNotificationInput, DeleteNotificationInput, ListNotificationsQuery, CreateNotificationMutation, UpdateNotificationMutation, DeleteNotificationMutation, ModelNotificationFilterInput, OnCreateNotificationSubscription } from "../../../API";
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE, GraphQLSubscription } from '@aws-amplify/api';
import { onCreateNotification } from "../../../graphql/subscriptions";

export async function createNotification(notification: CreateNotificationInput) {
    return await API.graphql<GraphQLQuery<CreateNotificationMutation>>({...graphqlOperation(mutations.createNotification, { input: notification}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateNotification(notification: UpdateNotificationInput) {
    return await API.graphql<GraphQLQuery<UpdateNotificationMutation>>({...graphqlOperation(mutations.updateNotification, { input: notification}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteNotification(notification: DeleteNotificationInput) {
    return await API.graphql<GraphQLQuery<DeleteNotificationMutation>>({...graphqlOperation(mutations.deleteNotification, { input: notification}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listNotification(
    filter?: ModelNotificationFilterInput,
    limit?: number,
    nextToken?: string
    ) {
        return await API.graphql<GraphQLQuery<ListNotificationsQuery>>(graphqlOperation(queries.listNotifications, {
            filter: filter,
            limit: limit,
            nextToken: nextToken
        }))
    }


export function createNotificationSub(){
    return API.graphql<GraphQLSubscription<OnCreateNotificationSubscription>>(graphqlOperation(onCreateNotification))
}





