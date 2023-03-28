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
export declare type ConductorCreateFormInputValues = {
    nombre?: string;
    apellido?: string;
    num_incidencias?: number;
};
export declare type ConductorCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido?: ValidationFunction<string>;
    num_incidencias?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConductorCreateFormOverridesProps = {
    ConductorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido?: PrimitiveOverrideProps<TextFieldProps>;
    num_incidencias?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConductorCreateFormProps = React.PropsWithChildren<{
    overrides?: ConductorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConductorCreateFormInputValues) => ConductorCreateFormInputValues;
    onSuccess?: (fields: ConductorCreateFormInputValues) => void;
    onError?: (fields: ConductorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConductorCreateFormInputValues) => ConductorCreateFormInputValues;
    onValidate?: ConductorCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConductorCreateForm(props: ConductorCreateFormProps): React.ReactElement;
