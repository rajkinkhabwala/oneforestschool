import { GraphQLError } from "graphql";
import { User } from "../API";
export interface GraphQLResult {
  items: Array< {} | null> | null | undefined;
  nextToken: string | null | undefined;
  errors: GraphQLError[] | undefined;
  extenstions: { [key: string]: any } | undefined;
}

export interface UserGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: User[] | null | undefined
}

export interface CourseGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: Course[] | null | undefined
}

export interface DepartmentGraphQLResult extends Omit<GraphQLResult, 'items'> {
  items: Department[] | null | undefined
}