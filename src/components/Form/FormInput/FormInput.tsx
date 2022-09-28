import React from "react";
import { 
  Checkbox,
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  TextField 
} from '@mui/material';

export interface FormInputProps {
  id: string,
  name: string,
  label?: string,
  type?: "input" | "checkbox" | "radio",
  formValue?: any,
  onChange?: (e: any) => void,
  inputProps?: any,
  options?: FormInputOptionProps[]
}

export interface FormInputOptionProps {
  name: string,
  label: string,
  value?: string,
  optionProps?: any,
}

const inputType = ["input", "checkbox", "radio"];
const defaultInputType = "input";

const FormInput = (props: FormInputProps) => {
  const { 
    id, 
    name, 
    label, 
    type = defaultInputType, 
    formValue,
    onChange,
    inputProps,
    options
  } = props;
  const inputTypeProps = type && inputType.includes(type) 
                      ? type : defaultInputType
  const otherInputProps = typeof inputProps === 'object' 
                            ? inputProps : {};

  const onInputChange = (e: any, optionName?: string) => {
    if (!formValue || !onChange) return;
    const newState: any = { ...formValue };
    const value = type === 
      'checkbox' 
        ? e.target.checked 
        : e.target.value;
    if (inputTypeProps === 'checkbox' && optionName) {
      if (typeof newState[name] === 'undefined')
        newState[name] = {};
      newState[name][optionName] = value;
    } else {
      newState[name] = value;
    }
    onChange(newState);
  }

  const getDefaultValue = (optionName?: string) => {
    let defaultValue = undefined;
    if (formValue !== undefined) {
      if (optionName) {
        defaultValue = formValue[name] && formValue[name][optionName] != undefined 
          ? formValue[name][optionName]
          : false
      } else {
        let defaultInputValue: any = '';
        if (inputTypeProps === 'checkbox') defaultInputValue = false;
        defaultValue = formValue[name] ? formValue[name] : defaultInputValue;
      }
      
    }
    return defaultValue;
  }

  if (inputTypeProps === 'checkbox') {
    if (!options) {
      return (
        <FormControlLabel
          id={id}
          label={label}
          control={
            <Checkbox 
              checked={getDefaultValue()}
              name={name}
              onChange={(e: any) => {
                onInputChange(e);
              }}
            />
          }
          {...otherInputProps}
        /> 
      )
    }
    return (
      <FormControl id={id}>
        <FormLabel> {label} </FormLabel>
        {options.length > 0 && (
          <FormGroup {...otherInputProps}>
            {options?.map(
              (item: FormInputOptionProps, index: number) => {
                const otherOptionProps = typeof item.optionProps === 'object'
                                          ? item.optionProps
                                          : {}
                return (
                  <FormControlLabel
                    key={index}
                    label={item.label}
                    control={
                      <Checkbox 
                        checked={getDefaultValue(item.name)}
                        name={item.name}
                        onChange={(e: any) => {
                          onInputChange(e, item.name);
                        }}
                      />
                    }
                    {...otherOptionProps}
                  />  
                )
              })}
          </FormGroup>
        )}
      </FormControl>
    )
  }

  if (inputTypeProps === 'radio') {
    if (!options || options.length < 1) return null;
    return (
      <FormControl id={id}>
        <FormLabel> {label} </FormLabel>
        <RadioGroup 
          value={getDefaultValue()}
          onChange={(e: any) => {
            onInputChange(e)
          }}
          {...otherInputProps}
        >
          {options?.map(
            (item: FormInputOptionProps, index: number) => {
              const otherOptionProps = typeof item.optionProps === 'object'
                                        ? item.optionProps
                                        : {}
              return (
                <FormControlLabel
                  key={index}
                  label={item.label}
                  control={<Radio />}
                  value={item.value}
                  {...otherOptionProps}
                />  
              )
          })}
        </RadioGroup>
      </FormControl>
    )
  }

  return (
    <TextField 
      id={id}
      value={getDefaultValue()}
      name={name}
      onChange={onInputChange}
      label={label}
      {...otherInputProps}
    />
  );
};

export default FormInput;