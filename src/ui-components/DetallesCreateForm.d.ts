/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DetallesCreateFormInputValues = {
    ubicacion?: string;
    url_video?: string;
};
export declare type DetallesCreateFormValidationValues = {
    ubicacion?: ValidationFunction<string>;
    url_video?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetallesCreateFormOverridesProps = {
    DetallesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ubicacion?: PrimitiveOverrideProps<TextFieldProps>;
    url_video?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DetallesCreateFormProps = React.PropsWithChildren<{
    overrides?: DetallesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DetallesCreateFormInputValues) => DetallesCreateFormInputValues;
    onSuccess?: (fields: DetallesCreateFormInputValues) => void;
    onError?: (fields: DetallesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DetallesCreateFormInputValues) => DetallesCreateFormInputValues;
    onValidate?: DetallesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DetallesCreateForm(props: DetallesCreateFormProps): React.ReactElement;
