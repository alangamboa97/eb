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
export default function IncidenciaUpdateForm(props) {
  const {
    id: idProp,
    incidencia: incidenciaModelProp,
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
    fecha: "",
    hora: "",
  };
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [url_video, setUrl_video] = React.useState(initialValues.url_video);
  const [ubicacion, setUbicacion] = React.useState(initialValues.ubicacion);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [hora, setHora] = React.useState(initialValues.hora);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = incidenciaRecord
      ? { ...initialValues, ...incidenciaRecord }
      : initialValues;
    setEstado(cleanValues.estado);
    setUrl_video(cleanValues.url_video);
    setUbicacion(cleanValues.ubicacion);
    setFecha(cleanValues.fecha);
    setHora(cleanValues.hora);
    setErrors({});
  };
  const [incidenciaRecord, setIncidenciaRecord] =
    React.useState(incidenciaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Incidencia, idProp)
        : incidenciaModelProp;
      setIncidenciaRecord(record);
    };
    queryData();
  }, [idProp, incidenciaModelProp]);
  React.useEffect(resetStateValues, [incidenciaRecord]);
  const validations = {
    estado: [],
    url_video: [],
    ubicacion: [],
    fecha: [],
    hora: [],
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
          fecha,
          hora,
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
          await DataStore.save(
            Incidencia.copyOf(incidenciaRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "IncidenciaUpdateForm")}
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
              fecha,
              hora,
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
              fecha,
              hora,
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
              fecha,
              hora,
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
        label="Fecha"
        isRequired={false}
        isReadOnly={false}
        value={fecha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              estado,
              url_video,
              ubicacion,
              fecha: value,
              hora,
            };
            const result = onChange(modelFields);
            value = result?.fecha ?? value;
          }
          if (errors.fecha?.hasError) {
            runValidationTasks("fecha", value);
          }
          setFecha(value);
        }}
        onBlur={() => runValidationTasks("fecha", fecha)}
        errorMessage={errors.fecha?.errorMessage}
        hasError={errors.fecha?.hasError}
        {...getOverrideProps(overrides, "fecha")}
      ></TextField>
      <TextField
        label="Hora"
        isRequired={false}
        isReadOnly={false}
        value={hora}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              estado,
              url_video,
              ubicacion,
              fecha,
              hora: value,
            };
            const result = onChange(modelFields);
            value = result?.hora ?? value;
          }
          if (errors.hora?.hasError) {
            runValidationTasks("hora", value);
          }
          setHora(value);
        }}
        onBlur={() => runValidationTasks("hora", hora)}
        errorMessage={errors.hora?.errorMessage}
        hasError={errors.hora?.hasError}
        {...getOverrideProps(overrides, "hora")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || incidenciaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || incidenciaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
