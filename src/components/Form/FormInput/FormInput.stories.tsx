import React from "react";
import { ComponentMeta } from "@storybook/react";
import FormInput from "./FormInput";

export default {
  title: "ReactComponentLibrary/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

export const TestFormInput = () => {
  const [value, setValue] = React.useState({});

  const onValueChange = (newValue: any) => {
    console.log("Current form", value);
    setValue(newValue);
    console.log("Updated form: ", newValue);
  }

  return (
    <div 
      style={{
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <FormInput
        id="test"
        name="form-input-text"
        label="Form Input Text"
        formValue={value}
        onChange={onValueChange}
        inputProps={{
          maxLength: 10
        }}
      />
      <FormInput
        id="test"
        name="form-input-number"
        label="Form Input Number"
        type="number"
        formValue={value}
        onChange={onValueChange}
        align="row"
        inputProps={{
          max: 10,
          min: 5
        }}
      />
      <FormInput
        id="test"
        name="form-input-checkbox"
        label="Form Input Checkbox"
        type="checkbox"
        align="row"
        inputOrder="reverse"
        formValue={value}
        onChange={onValueChange}
      />
      <FormInput
        id="test"
        name="form-input-textarea"
        label="Form Input Textarea"
        type="textarea"
        formValue={value}
        onChange={onValueChange}
        inputProps={{
          maxLength: 20
        }}
      />
    </div>
  )
}