import { API } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE} from '@aws-amplify/api';
import { CreateUserInput, UpdateUserMutation, DeleteUserInput, GetUserQuery, ListUsersQuery, UpdateUserInput, User, ListUsersQueryVariables} from '../../../API'
import { UserGraphQLResult } from "../types/api";

export async function createUser(user: CreateUserInput) {
    return await API.graphql<GraphQLQuery<UpdateUserMutation>>({...graphqlOperation(mutations.createUser, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateUser(user: UpdateUserInput) {
    return await API.graphql<GraphQLQuery<UpdateUserMutation>>({...graphqlOperation(mutations.updateUser, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteUser(user: DeleteUserInput) {
    return await API.graphql<GraphQLQuery<DeleteUserInput>>({...graphqlOperation(mutations.deleteUser, { input: user }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listUser(input?: ListUsersQueryVariables): Promise<UserGraphQLResult> {
    return await new Promise((resolve, reject) =>{
        API.graphql<GraphQLQuery<ListUsersQuery>>({ ...graphqlOperation(queries.listUsers, {input: input}),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    }).then((value) => {
    resolve({
        items: value.data?.listUsers?.items as User[],
        nextToken: value.data?.listUsers?.nextToken,
        errors: value.errors,
        extenstions: value.extensions,
    })
    }).catch((err) => reject(err))
    })
}



export async function getUser(user: string) {
    return await API.graphql<GraphQLQuery<GetUserQuery>>(graphqlOperation(queries.getUser, { id: user }))
}