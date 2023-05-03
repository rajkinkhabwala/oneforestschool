import { API } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import { GraphQLQuery, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateCourseInput, CreateCourseMutation, Course, DeleteCourseMutation, GetCourseQuery, ListCoursesQuery, ModelCourseFilterInput, UpdateCourseInput, UpdateCourseMutation } from "../../../API";
import { CourseGraphQLResult, GraphQLResult } from "../types/api";


export async function createCourse(course: CreateCourseInput) {
    return await API.graphql<GraphQLQuery<CreateCourseMutation>>({...graphqlOperation(mutations.createCourse, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function updateCourse(course: UpdateCourseInput) {
    return await API.graphql<GraphQLQuery<UpdateCourseMutation>>({...graphqlOperation(mutations.updateCourse, { input: course }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function deleteCourse(id: string) {
    return await API.graphql<GraphQLQuery<DeleteCourseMutation>>({...graphqlOperation(mutations.deleteCourse, { input: { id: id} }), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
}

export async function listCourse(
    filter?: ModelCourseFilterInput,
    limit?: number,
    nextToken?: string
) :Promise<CourseGraphQLResult> {
        return await new Promise((resolve, reject) =>{
            API.graphql<GraphQLQuery<ListCoursesQuery>>(graphqlOperation(queries.listCourses, {
                filter: filter,
                limit: limit,
                nextToken: nextToken
            })).then((value) => {
        resolve({
            items: value.data?.listCourses?.items as Course[],
            nextToken: value.data?.listCourses?.nextToken,
            errors: value.errors,
            extenstions: value.extensions,
        })
        }).catch((err) => reject(err))
        })
    }

export async function getCourse(course: string) {
    return await API.graphql<GraphQLQuery<GetCourseQuery>>(graphqlOperation(queries.getCourse, { id: course }))
}