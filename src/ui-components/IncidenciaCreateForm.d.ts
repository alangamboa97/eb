/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IncidenciaCreateFormInputValues = {
    title?: string;
    estado?: boolean;
    fecha_hora?: string;
};
export declare type IncidenciaCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    estado?: ValidationFunction<boolean>;
    fecha_hora?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncidenciaCreateFormOverridesProps = {
    IncidenciaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    fecha_hora?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncidenciaCreateFormProps = React.PropsWithChildren<{
    overrides?: IncidenciaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IncidenciaCreateFormInputValues) => IncidenciaCreateFormInputValues;
    onSuccess?: (fields: IncidenciaCreateFormInputValues) => void;
    onError?: (fields: IncidenciaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncidenciaCreateFormInputValues) => IncidenciaCreateFormInputValues;
    onValidate?: IncidenciaCreateFormValidationValues;
} & React.CSSProperties>;
export default function IncidenciaCreateForm(props: IncidenciaCreateFormProps): React.ReactElement;
