import React from "react";
import { Box, Typography } from "@mui/material";
import FormInput, { FormInputOptionProps, FormInputProps } from "./FormInput/FormInput";

export interface FormProps {
  formData: string;
  formProps?: Object;
  formValue?: any,
  onChange?: (value: any) => void,
  titleStyles?: Object;
}

export interface FormData {
  label: string,
  formFields: FormInputProps[];
}

const Form = (props: FormProps) => {
  const { 
    formData, 
    formProps,
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
  // const isControlledForm: boolean = 
  //   formValue != undefined 
  //   && onChange != undefined 
  // const [defaultFormValue, setDefaultFormValue] = 
  //   React.useState<Object>({});

  // const initFormValue = () => {
  //   if (!data || data?.formFields?.length < 1) return;
  //   const value: any = {};
  //   data.formFields.map((item: FormInputProps) => {
  //     if (!item.name) return;
  //     if (
  //       item.type === 'checkbox' 
  //       && item.options
  //       && item.options.length > 0
  //     ) {
  //       value[item.name] = {};
  //       item.options.map((option: FormInputOptionProps) => {
  //         value[item.name][option.name] = false;
  //       })
  //       return;
  //     }
  //     value[item.name] = '';
  //   })
  //   console.log("Default form value: ", value);
  //   setDefaultFormValue(value);
  // }

  // React.useEffect(() => {
  //   if (isControlledForm)
  //     initFormValue()
  // }, [])

  return (
    <Box {...boxProps}>
      <Typography sx={labelStyles}> {data.label} </Typography>
      {data.formFields && data.formFields.map(
        (field: FormInputProps) => (
          <FormInput 
            key={field.id}
            formValue={formValue}
            onChange={onChange}
            {...field}
          />
        )
      )}
    </Box>
  );
};

export default Form;