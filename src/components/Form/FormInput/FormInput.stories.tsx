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
        error={true}
        inputProps={{
          maxLength: 10
        }}
      />
      <FormInput
        id="test1"
        name="form-input-checkbox"
        label="Form Input Checkbox"
        type="checkbox"
        error={true}
        formValue={value}
        onChange={onValueChange}
      />
      <FormInput
        id="test"
        name="form-input-checkboxes"
        label="Form Input Checkboxes"
        type="checkbox"
        formValue={value}
        onChange={onValueChange}
        error={true}
        options={[
          {
            name: 'option1',
            label: 'Option 1',
            optionProps: {
              disabled: true
            }
          },
          {
            name: 'option2',
            label: 'Option 2'
          },
          {
            name: 'option3',
            label: 'Option 3'
          }
        ]}
      />
      <FormInput
        id="test"
        name="form-input-radio"
        label="Form Input Radio"
        type="radio"
        formValue={value}
        onChange={onValueChange}
        error={true}
        inputProps={{
          required: true
        }}
        options={[
          {
            name: 'option1',
            label: 'Option 1',
            value: 'option1',
          },
          {
            name: 'option2',
            label: 'Option 2',
            value: 'option2',
          },
          {
            name: 'option3',
            label: 'Option 3',
            value: 'option3',
          }
        ]}
      />
    </div>
  )
}