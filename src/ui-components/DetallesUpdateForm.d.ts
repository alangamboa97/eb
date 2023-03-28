/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Detalles } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DetallesUpdateFormInputValues = {
    ubicacion?: string;
    url_video?: string;
};
export declare type DetallesUpdateFormValidationValues = {
    ubicacion?: ValidationFunction<string>;
    url_video?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetallesUpdateFormOverridesProps = {
    DetallesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ubicacion?: PrimitiveOverrideProps<TextFieldProps>;
    url_video?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DetallesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DetallesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    detalles?: Detalles;
    onSubmit?: (fields: DetallesUpdateFormInputValues) => DetallesUpdateFormInputValues;
    onSuccess?: (fields: DetallesUpdateFormInputValues) => void;
    onError?: (fields: DetallesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DetallesUpdateFormInputValues) => DetallesUpdateFormInputValues;
    onValidate?: DetallesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DetallesUpdateForm(props: DetallesUpdateFormProps): React.ReactElement;
