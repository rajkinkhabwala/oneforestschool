import { API } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateDepartmentInput, CreateDepartmentMutation, DeleteDepartmentMutation, Department, GetDepartmentQuery, ListNotificationsQueryVariables , ListDepartmentsQuery, UpdateDepartmentInput, UpdateDepartmentMutation, ListDepartmentsQueryVariables } from "../../../API";
import { DepartmentGraphQLResult } from "../types/api";


export async function createDepartment(department: CreateDepartmentInput) {
    return await API.graphql<GraphQLQuery<CreateDepartmentMutation>>({...graphqlOperation(mutations.createDepartment, { input: department }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateDepartment(department: UpdateDepartmentInput) {
    return await API.graphql<GraphQLQuery<UpdateDepartmentMutation>>({...graphqlOperation(mutations.updateDepartment, { input: department }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteDepartment(id: string) {
    return await API.graphql<GraphQLQuery<DeleteDepartmentMutation>>({...graphqlOperation(mutations.deleteDepartment, { input: {
        id: id
    } }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
    
}

export async function listDepartment(
    input?: ListDepartmentsQueryVariables
): Promise<DepartmentGraphQLResult> {
    return await new Promise((resolve, reject) =>{
        API.graphql<GraphQLQuery<ListDepartmentsQuery>>({ ...graphqlOperation(queries.listDepartments, {input}),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    }).then((value) => {
    resolve({
        items: value.data?.listDepartments?.items as Department[],
        nextToken: value.data?.listDepartments?.nextToken,
        errors: value.errors,
        extenstions: value.extensions,
    })
    }).catch((err) => reject(err))
    })
}

export async function getDepartment(department: string) {
    return await API.graphql<GraphQLQuery<GetDepartmentQuery>>(graphqlOperation(queries.getDepartment, { id: department }))
}
