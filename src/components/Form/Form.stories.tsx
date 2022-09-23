import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from "./Form";
import { useRef } from "@storybook/addons";

export default {
  title: "ReactComponentLibrary/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const TestForm = () => {
  const testFormData = JSON.stringify({
    label: 'Test form',
    section: [
      {
        title: 'Personal information',
        input: [
          {
            id: 'name',
            name: 'name',
            label: 'Name',
            inputProps: {
              maxLength: 10,
              abc: 123
            }
          },
          {
            id: 'email',
            name: 'email',
            label: 'Email'
          },
          {
            id: 'phone',
            name: 'phone',
            label: 'Phone'
          },
        ]
      },
      {
        title: 'Work status',
        input: [
          {
            id: 'job',
            name: 'job',
            label: 'Job'
          },
          {
            id: 'year_experience',
            name: 'year_experience',
            label: 'Years experience',
            type: 'number',
            inputProps: {
              min: 0,
              max: 10,
              step: 2
            },
            align: 'row'
          },
        ]
      },
      {
        title: 'Marriage',
        input: [
          {
            id: 'marriage_status',
            name: 'marriage_status',
            label: 'Marriage status',
            type: 'checkbox',
            align: 'row'
          },
        ]
      },
    ]
  })
  const inputField = [
    "name",
    "email",
    "phone",
    "job",
    "year_experience",
    "marriage_status"
  ]

  const myRef: any = useRef(null);
  const [formValue, setFormValue] = React.useState({});

  const onSubmitForm1 = () => {
    const inputData: any = {};
    inputField.map((label: string) => {
      inputData[label] = myRef.current[label].value;
    })
    console.log("Form 1 Value: ", inputData);
  }

  const onSubmitForm2 = () => {
    console.log("Form 2 Value: ", formValue);
  }

  return (
    <div>
      <Form
        id="test-form-1"
        formData={testFormData}
        formOutput={myRef}
        formValue={formValue}
        onChange={setFormValue}
      />
      <button 
        onClick={(e) => {
          onSubmitForm1();
          onSubmitForm2();
        }}
      > 
        Submit 
      </button>
    </div>
  )
}
