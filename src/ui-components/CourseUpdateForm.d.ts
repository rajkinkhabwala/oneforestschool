/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Course } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseUpdateFormInputValues = {
    name?: string;
    code?: string;
    visibility?: boolean;
    start_date?: string;
    end_date?: string;
    description?: string;
    main_image?: string;
    images?: string[];
    credit?: number;
    event?: string;
};
export declare type CourseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    visibility?: ValidationFunction<boolean>;
    start_date?: ValidationFunction<string>;
    end_date?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    main_image?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    credit?: ValidationFunction<number>;
    event?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseUpdateFormOverridesProps = {
    CourseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    visibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    start_date?: PrimitiveOverrideProps<TextFieldProps>;
    end_date?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    main_image?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<TextFieldProps>;
    event?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CourseUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    course?: Course;
    onSubmit?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onSuccess?: (fields: CourseUpdateFormInputValues) => void;
    onError?: (fields: CourseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onValidate?: CourseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseUpdateForm(props: CourseUpdateFormProps): React.ReactElement;
