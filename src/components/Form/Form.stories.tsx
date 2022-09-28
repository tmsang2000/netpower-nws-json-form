import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from "./Form";

export default {
  title: "ReactComponentLibrary/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const TestForm = () => {
  const testFormData = JSON.stringify({
    label: 'Test form',
    formFields: [
      {
        id: 'input-1',
        name: 'input-1',
        label: 'Input 1',
        inputProps: {
          maxLength: 10
        }
      },
      {
        id: 'input-2',
        name: 'input-2',
        label: 'Input 2',
        type: 'checkbox',
      },
      {
        id: 'input-3',
        name: 'input-3',
        label: 'Input 3',
        type: 'checkbox',
        options: [
          {
            name: 'option-1',
            label: 'Option 1',
            optionProps: {
              disabled: true
            }
          },
          {
            name: 'option-2',
            label: 'Option 2',
          },
        ]
      },
      {
        id: 'input-4',
        name: 'input-4',
        label: 'Input 4',
        type: 'radio',
        inputProps: {
          required: true
        },
        options: [
          {
            name: 'option-1',
            label: 'Option 1',
            value: 'option-1'
          },
          {
            name: 'option-2',
            label: 'Option 2',
            value: 'option-2'
          },
        ]
      },
    ]
  })
  const [formValue, setFormValue] = React.useState({});

  const onSubmitForm2 = () => {
    console.log("Form 2 Value: ", formValue);
  }

  return (
    <div>
      <Form
        formData={testFormData}
        formValue={formValue}
        onChange={setFormValue}
        formProps={{
          style: {
            padding: 20,
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
          }
        }}
        titleStyles={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'red'
        }}
      />
      <button 
        onClick={(e) => {
          onSubmitForm2();
        }}
      > 
        Submit 
      </button>
    </div>
  )
}
