import React from "react";
import { Box, Typography } from "@mui/material";
import FormInput, { FormInputProps } from "./FormInput/FormInput";

export interface FormProps {
  formData: string;
  formProps?: { [index: string]: any };
  formErrors?: { [index: string]: boolean };
  formValue?: { [index: string]: any },
  onChange?: (value: any) => void,
  titleStyles?: { [index: string]: any };
}

export interface FormData {
  label: string,
  formFields: FormInputProps[];
}

const Form = (props: FormProps) => {
  const { 
    formData, 
    formProps,
    formErrors,
    titleStyles,
    formValue,
    onChange,
  } = props;

  if (
    !formData
    || typeof formData != 'string'
  ) return null;

  let data: FormData | null = null;

  try {
    data = JSON.parse(formData);
  } catch (err) {
    console.warn("Error while rendering Dynamic Form: ", err);
    return null;
  }

  if (!data || typeof data != 'object') return null;
  
  const boxProps = typeof formProps === 'object' 
                    ? formProps 
                    : {}
  const labelStyles = typeof titleStyles === 'object'
                        ? titleStyles
                        : {}

  return (
    <Box {...boxProps}>
      <Typography sx={labelStyles}> {data?.label} </Typography>
      {data?.formFields?.length > 0 && data.formFields.map(
        (field: FormInputProps) => (
          <FormInput 
            key={field.id}
            formValue={formValue}
            onChange={onChange}
            error={formErrors && formErrors[field.name]}
            {...field}
          />
        )
      )}
    </Box>
  );
};

export default Form;