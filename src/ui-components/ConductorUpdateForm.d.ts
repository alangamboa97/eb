/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Conductor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConductorUpdateFormInputValues = {
    nombre?: string;
    apellido?: string;
    num_incidencias?: number;
};
export declare type ConductorUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido?: ValidationFunction<string>;
    num_incidencias?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConductorUpdateFormOverridesProps = {
    ConductorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido?: PrimitiveOverrideProps<TextFieldProps>;
    num_incidencias?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConductorUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConductorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conductor?: Conductor;
    onSubmit?: (fields: ConductorUpdateFormInputValues) => ConductorUpdateFormInputValues;
    onSuccess?: (fields: ConductorUpdateFormInputValues) => void;
    onError?: (fields: ConductorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConductorUpdateFormInputValues) => ConductorUpdateFormInputValues;
    onValidate?: ConductorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConductorUpdateForm(props: ConductorUpdateFormProps): React.ReactElement;
