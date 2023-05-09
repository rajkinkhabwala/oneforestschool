import { API } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import { CreateNotificationInput, UpdateNotificationInput, DeleteNotificationInput, ListNotificationsQuery, CreateNotificationMutation, UpdateNotificationMutation, DeleteNotificationMutation, OnCreateNotificationSubscription, ListNotificationsQueryVariables, GetNotificationQuery } from "../../../API";
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE, GraphQLSubscription } from '@aws-amplify/api';
import { onCreateNotification } from "../../../graphql/subscriptions";
import {NotificationGraphQLResult } from "../types/api";
import {Notification} from "../../../API"

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
    input?: ListNotificationsQueryVariables,
    ): Promise<NotificationGraphQLResult> {
        return await new Promise((resolve, reject) =>{
            API.graphql<GraphQLQuery<ListNotificationsQuery>>({ ...graphqlOperation(queries.listNotifications, {input}),
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        }).then((value) => {
        resolve({
            items: value.data?.listNotifications?.items as Notification[] ,
            nextToken: value.data?.listNotifications?.nextToken,
            errors: value.errors,
            extenstions: value.extensions,
        })
        }).catch((err) => reject(err))
        })
    }

export function createNotificationSub(){
    return API.graphql<GraphQLSubscription<OnCreateNotificationSubscription>>(graphqlOperation(onCreateNotification))
}

export function getNotificationByCourse(){
    return API.graphql<GraphQLQuery<GetNotificationQuery>>(graphqlOperation(queries.getNotification), { id: queries.notificationsByCourseID})
}

export function getNotificationByUser(){
    return API.graphql<GraphQLQuery<GetNotificationQuery>>(graphqlOperation(queries.getNotification), { id : queries.notificationsByUserID})
}

export async function getNotification(notification: string) {
    return await API.graphql<GraphQLQuery<GetNotificationQuery>>(graphqlOperation(queries.getNotification, { id: notification }))
}

// function value(value: GraphQLResult<GraphQLQuery<ListNotificationsQueryVariables>>): GraphQLResult<GraphQLQuery<ListNotificationsQueryVariables>> | PromiseLike<GraphQLResult<GraphQLQuery<ListNotificationsQueryVariables>>> {
//     throw new Error("Function not implemented.");
// }

