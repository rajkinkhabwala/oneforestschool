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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Course } from "../models";
import { fetchByPath, validateField } from "./utils";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { DataStore } from "aws-amplify";
export default function CourseCreateForm(props) {
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
    name: "",
    code: "",
    visibility: false,
    start_date: "",
    end_date: "",
    description: "",
    main_image: undefined,
    credit: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [code, setCode] = React.useState(initialValues.code);
  const [visibility, setVisibility] = React.useState(initialValues.visibility);
  const [start_date, setStart_date] = React.useState(initialValues.start_date);
  const [end_date, setEnd_date] = React.useState(initialValues.end_date);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [main_image, setMain_image] = React.useState(initialValues.main_image);
  const [credit, setCredit] = React.useState(initialValues.credit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCode(initialValues.code);
    setVisibility(initialValues.visibility);
    setStart_date(initialValues.start_date);
    setEnd_date(initialValues.end_date);
    setDescription(initialValues.description);
    setMain_image(initialValues.main_image);
    setCredit(initialValues.credit);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    code: [{ type: "Required" }],
    visibility: [{ type: "Required" }],
    start_date: [],
    end_date: [],
    description: [],
    main_image: [],
    credit: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          name,
          code,
          visibility,
          start_date,
          end_date,
          description,
          main_image,
          credit,
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
          await DataStore.save(new Course(modelFields));
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
      {...getOverrideProps(overrides, "CourseCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              code,
              visibility,
              start_date,
              end_date,
              description,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={true}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              code: value,
              visibility,
              start_date,
              end_date,
              description,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <SwitchField
        label="Visibility"
        defaultChecked={false}
        isDisabled={false}
        isChecked={visibility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              code,
              visibility: value,
              start_date,
              end_date,
              description,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.visibility ?? value;
          }
          if (errors.visibility?.hasError) {
            runValidationTasks("visibility", value);
          }
          setVisibility(value);
        }}
        onBlur={() => runValidationTasks("visibility", visibility)}
        errorMessage={errors.visibility?.errorMessage}
        hasError={errors.visibility?.hasError}
        {...getOverrideProps(overrides, "visibility")}
      ></SwitchField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={start_date && convertToLocal(new Date(start_date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              code,
              visibility,
              start_date: value,
              end_date,
              description,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.start_date ?? value;
          }
          if (errors.start_date?.hasError) {
            runValidationTasks("start_date", value);
          }
          setStart_date(value);
        }}
        onBlur={() => runValidationTasks("start_date", start_date)}
        errorMessage={errors.start_date?.errorMessage}
        hasError={errors.start_date?.hasError}
        {...getOverrideProps(overrides, "start_date")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={end_date && convertToLocal(new Date(end_date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              code,
              visibility,
              start_date,
              end_date: value,
              description,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.end_date ?? value;
          }
          if (errors.end_date?.hasError) {
            runValidationTasks("end_date", value);
          }
          setEnd_date(value);
        }}
        onBlur={() => runValidationTasks("end_date", end_date)}
        errorMessage={errors.end_date?.errorMessage}
        hasError={errors.end_date?.hasError}
        {...getOverrideProps(overrides, "end_date")}
      ></TextField>
      <TextAreaField
        label="Description"
        descriptiveText="Course Description"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter Course Description over here."
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              code,
              visibility,
              start_date,
              end_date,
              description: value,
              main_image,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextAreaField>
      <Field
        errorMessage={errors.main_image?.errorMessage}
        hasError={errors.main_image?.hasError}
        label={"Main image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setMain_image((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  name,
                  code,
                  visibility,
                  start_date,
                  end_date,
                  description,
                  main_image: value,
                  credit,
                };
                const result = onChange(modelFields);
                value = result?.main_image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setMain_image((prev) => {
              let value = initialValues?.main_image;
              if (onChange) {
                const modelFields = {
                  name,
                  code,
                  visibility,
                  start_date,
                  end_date,
                  description,
                  main_image: value,
                  credit,
                };
                const result = onChange(modelFields);
                value = result?.main_image ?? value;
              }
              return value;
            });
          }}
          accessLevel={"protected"}
          acceptedFileTypes={["image/*"]}
          isResumable={false}
          showThumbnails={true}
        ></StorageManager>
      </Field>
      <TextField
        label="Credit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={credit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              code,
              visibility,
              start_date,
              end_date,
              description,
              main_image,
              credit: value,
            };
            const result = onChange(modelFields);
            value = result?.credit ?? value;
          }
          if (errors.credit?.hasError) {
            runValidationTasks("credit", value);
          }
          setCredit(value);
        }}
        onBlur={() => runValidationTasks("credit", credit)}
        errorMessage={errors.credit?.errorMessage}
        hasError={errors.credit?.hasError}
        {...getOverrideProps(overrides, "credit")}
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
