/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseCreateFormInputValues = {
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
export declare type CourseCreateFormValidationValues = {
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
export declare type CourseCreateFormOverridesProps = {
    CourseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CourseCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onSuccess?: (fields: CourseCreateFormInputValues) => void;
    onError?: (fields: CourseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onValidate?: CourseCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseCreateForm(props: CourseCreateFormProps): React.ReactElement;
