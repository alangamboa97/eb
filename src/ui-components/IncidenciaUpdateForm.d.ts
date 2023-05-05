/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Incidencia } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IncidenciaUpdateFormInputValues = {
    estado?: boolean;
    url_video?: string;
    ubicacion?: string;
    fecha_hora?: string;
};
export declare type IncidenciaUpdateFormValidationValues = {
    estado?: ValidationFunction<boolean>;
    url_video?: ValidationFunction<string>;
    ubicacion?: ValidationFunction<string>;
    fecha_hora?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IncidenciaUpdateFormOverridesProps = {
    IncidenciaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    estado?: PrimitiveOverrideProps<SwitchFieldProps>;
    url_video?: PrimitiveOverrideProps<TextFieldProps>;
    ubicacion?: PrimitiveOverrideProps<TextFieldProps>;
    fecha_hora?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IncidenciaUpdateFormProps = React.PropsWithChildren<{
    overrides?: IncidenciaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    incidencia?: Incidencia;
    onSubmit?: (fields: IncidenciaUpdateFormInputValues) => IncidenciaUpdateFormInputValues;
    onSuccess?: (fields: IncidenciaUpdateFormInputValues) => void;
    onError?: (fields: IncidenciaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IncidenciaUpdateFormInputValues) => IncidenciaUpdateFormInputValues;
    onValidate?: IncidenciaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IncidenciaUpdateForm(props: IncidenciaUpdateFormProps): React.ReactElement;
