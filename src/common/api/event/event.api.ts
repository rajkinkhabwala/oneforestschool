import { API } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateEventInput, UpdateEventInput, UpdateEventMutation, DeleteEventMutation, Event, ListEventsQueryVariables, ListEventsQuery, GetEventQuery } from "../../../API";
import { EventGraphQLResult } from "../types/api";


export async function createEvent(event: CreateEventInput) {
    return await API.graphql<GraphQLQuery<CreateEventInput>>({...graphqlOperation(mutations.createEvent, { input: event }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateEvent(event: UpdateEventInput) {
    return await API.graphql<GraphQLQuery<UpdateEventMutation>>({...graphqlOperation(mutations.updateEvent, { input: event }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteEvent(id: string) {
    return await API.graphql<GraphQLQuery<DeleteEventMutation>>({...graphqlOperation(mutations.deleteEvent, { input: {
        id: id
    } }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
    
}

export async function listEvent(
    input?: ListEventsQueryVariables
): Promise<EventGraphQLResult> {
    return await new Promise((resolve, reject) =>{
        API.graphql<GraphQLQuery<ListEventsQuery>>({ ...graphqlOperation(queries.listDepartments, {input}),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    }).then((value) => {
    resolve({
        items: value.data?.listEvents?.items as Event[],
        nextToken: value.data?.listEvents?.nextToken,
        errors: value.errors,
        extenstions: value.extensions,
    })
    }).catch((err) => reject(err))
    })
}

export async function getEvent(id: string) {
    return await API.graphql<GraphQLQuery<GetEventQuery>>(graphqlOperation(queries.getEvent, { id: id }))
}
