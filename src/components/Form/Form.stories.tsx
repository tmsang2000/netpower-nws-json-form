import React, { useRef } from "react";
import { ComponentMeta } from "@storybook/react";
import Form from "./Form";

export default {
  title: "ReactComponentLibrary/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const testFormData = JSON.stringify({
  label: 'Declaration',
  formFields: [
    {
      id: 'mass_purity_uncertainty',
      name: 'mass_purity_uncertainty',
      label: '1. Is there any uncertainty about the mass purity?',
      type: 'radio',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
    {
      id: 'mass_purity_uncertainty_explanation',
      name: 'mass_purity_uncertainty_explanation',
      label: 'Describe impurity',
      inputProps: {
        multiline: true,
        rows: 4,
        variant: 'filled',
      },
    },
    {
      id: 'mass_origination',
      name: 'mass_origination',
      label: '2. Where the mass is originating from?',
      type: 'checkbox',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          name: 'road_originating',
          label: 'Roads or railroads',
        },
        {
          name: 'industy_originating',
          label: 'Industrial, gas station, workshop or similar',
        },
        {
          name: 'city_originating',
          label: 'City area',
        },
      ],
    },
    {
      id: 'polution_completed',
      name: 'polution_completed',
      label: '3. Has the pollution analysis been completed?',
      type: 'radio',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
    {
      id: 'polution_completed_explanation',
      name: 'polution_completed_explanation',
      label: 'Describe why not',
      inputProps: {
        multiline: true,
        rows: 4,
        variant: 'filled',
      },
    },
  ],
});

const inputList = [
  'mass_purity_uncertainty',
  'mass_purity_uncertainty_explanation',
  'road_originating',
  'industy_originating',
  'city_originating',
  'polution_completed',
  'polution_completed_explanation'
]

const defaultFormErrors = {
  mass_purity_uncertainty: false,
  mass_purity_uncertainty_explanation: false,
  mass_origination: false,
  polution_completed: false,
  polution_completed_explanation: false,
}

export const TestForm = () => {
  const myRef = useRef<any>();
  const [formValue, setFormValue] = React.useState<any>({});
  const [formErrors, setFormErrors] = React.useState({
    mass_purity_uncertainty: false,
    mass_purity_uncertainty_explanation: false,
    mass_origination: false,
    polution_completed: false,
    polution_completed_explanation: false,
  });

  const onSubmitForm1 = () => {
    console.log("My ref: ", myRef.current);
    const res: any = {};
    inputList.map((item: string) => {
      if (myRef && myRef.current && myRef.current[item])
        res[item] = myRef?.current[item].value;
    })
    console.log("Form 1 value: ", res);
  }

  const onSubmitForm2 = () => {
    console.log("Form 2 Value: ", formValue);
  }

  const validateForm = () => {
    let flag = true;
    const newFormErrors = { ...defaultFormErrors };
    if (!formValue?.mass_purity_uncertainty) {
      newFormErrors.mass_purity_uncertainty = true;
      flag = false;
    }
    if (!formValue?.mass_purity_uncertainty_explanation) {
      newFormErrors.mass_purity_uncertainty_explanation = true;
      flag = false;
    }
    if (!formValue?.mass_origination?.road_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!formValue?.mass_origination?.industy_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!formValue?.mass_origination?.city_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!formValue?.polution_completed) {
      newFormErrors.polution_completed = true;
      flag = false;
    }
    if (!formValue?.polution_completed_explanation) {
      newFormErrors.polution_completed_explanation = true;
      flag = false;
    }
    setFormErrors(newFormErrors);
    return flag;
  }

  return (
    <div>
      <Form
        formData={testFormData}
        formValue={formValue}
        onChange={setFormValue}
        formErrors={formErrors}
        formProps={{
          ref: myRef,
          component: 'form',
          sx: {
            width: '28.5rem',
            display: 'flex',
            flexDirection: 'column',
            mb: '16px',
            gap: '16px',
          },
        }}
        titleStyles={{
          mt: '16px',
          fontWeight: 600,
          lineHeight: '1.4rem',
          fontSize: '1.15rem',
        }}
      />
      <button 
        onClick={(e) => {
          if (!validateForm()) return;
          onSubmitForm1();
          onSubmitForm2();
        }}
      > 
        Submit 
      </button>
    </div>
  )
}
