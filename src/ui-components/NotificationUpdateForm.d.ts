/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Notification } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationUpdateFormInputValues = {
    title?: string;
    message?: string;
    context_id?: string;
    context?: string;
};
export declare type NotificationUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    context_id?: ValidationFunction<string>;
    context?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationUpdateFormOverridesProps = {
    NotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    context_id?: PrimitiveOverrideProps<TextFieldProps>;
    context?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type NotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notification?: Notification;
    onSubmit?: (fields: NotificationUpdateFormInputValues) => NotificationUpdateFormInputValues;
    onSuccess?: (fields: NotificationUpdateFormInputValues) => void;
    onError?: (fields: NotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationUpdateFormInputValues) => NotificationUpdateFormInputValues;
    onValidate?: NotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationUpdateForm(props: NotificationUpdateFormProps): React.ReactElement;
