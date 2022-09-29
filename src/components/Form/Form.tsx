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
  const data: FormData = JSON.parse(formData);
  const boxProps = typeof formProps === 'object' 
                    ? formProps 
                    : {}
  const labelStyles = typeof titleStyles === 'object'
                        ? titleStyles
                        : {}

  return (
    <Box {...boxProps}>
      <Typography sx={labelStyles}> {data.label} </Typography>
      {data.formFields && data.formFields.map(
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