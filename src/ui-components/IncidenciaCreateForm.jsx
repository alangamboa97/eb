/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Incidencia } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function IncidenciaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    estado: false,
    url_video: "",
    ubicacion: "",
    fecha_hora: "",
  };
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [url_video, setUrl_video] = React.useState(initialValues.url_video);
  const [ubicacion, setUbicacion] = React.useState(initialValues.ubicacion);
  const [fecha_hora, setFecha_hora] = React.useState(initialValues.fecha_hora);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEstado(initialValues.estado);
    setUrl_video(initialValues.url_video);
    setUbicacion(initialValues.ubicacion);
    setFecha_hora(initialValues.fecha_hora);
    setErrors({});
  };
  const validations = {
    estado: [],
    url_video: [],
    ubicacion: [],
    fecha_hora: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          estado,
          url_video,
          ubicacion,
          fecha_hora,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Incidencia(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "IncidenciaCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Estado"
        defaultChecked={false}
        isDisabled={false}
        isChecked={estado}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              estado: value,
              url_video,
              ubicacion,
              fecha_hora,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      ></SwitchField>
      <TextField
        label="Url video"
        isRequired={false}
        isReadOnly={false}
        value={url_video}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              estado,
              url_video: value,
              ubicacion,
              fecha_hora,
            };
            const result = onChange(modelFields);
            value = result?.url_video ?? value;
          }
          if (errors.url_video?.hasError) {
            runValidationTasks("url_video", value);
          }
          setUrl_video(value);
        }}
        onBlur={() => runValidationTasks("url_video", url_video)}
        errorMessage={errors.url_video?.errorMessage}
        hasError={errors.url_video?.hasError}
        {...getOverrideProps(overrides, "url_video")}
      ></TextField>
      <TextField
        label="Ubicacion"
        isRequired={false}
        isReadOnly={false}
        value={ubicacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              estado,
              url_video,
              ubicacion: value,
              fecha_hora,
            };
            const result = onChange(modelFields);
            value = result?.ubicacion ?? value;
          }
          if (errors.ubicacion?.hasError) {
            runValidationTasks("ubicacion", value);
          }
          setUbicacion(value);
        }}
        onBlur={() => runValidationTasks("ubicacion", ubicacion)}
        errorMessage={errors.ubicacion?.errorMessage}
        hasError={errors.ubicacion?.hasError}
        {...getOverrideProps(overrides, "ubicacion")}
      ></TextField>
      <TextField
        label="Fecha hora"
        isRequired={false}
        isReadOnly={false}
        value={fecha_hora}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              estado,
              url_video,
              ubicacion,
              fecha_hora: value,
            };
            const result = onChange(modelFields);
            value = result?.fecha_hora ?? value;
          }
          if (errors.fecha_hora?.hasError) {
            runValidationTasks("fecha_hora", value);
          }
          setFecha_hora(value);
        }}
        onBlur={() => runValidationTasks("fecha_hora", fecha_hora)}
        errorMessage={errors.fecha_hora?.errorMessage}
        hasError={errors.fecha_hora?.hasError}
        {...getOverrideProps(overrides, "fecha_hora")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
