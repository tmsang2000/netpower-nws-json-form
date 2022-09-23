import React, { LegacyRef } from "react";
import FormSection from "./FormSection";
import { FormSectionProps } from "./FormSection/FormSection";
import "./Form.scss";

export interface FormProps {
  id: string,
  formData: string;
  formOutput?: LegacyRef<HTMLFormElement>;
  formValue?: any,
  onChange?: (value: any) => void,
}

export interface FormData {
  label: string,
  section: FormSectionProps[];
}

const Form = (props: FormProps) => {
  const { 
    id, 
    formData, 
    formOutput,
    formValue,
    onChange,
  } = props;
  const data: FormData = JSON.parse(formData);

  return (
    <form 
      id={id} 
      className="form-container"
      ref={formOutput}
    >
      <h1> {data.label} </h1>
      {data.section.map((section: FormSectionProps) => (
        <FormSection 
          key={section.id}
          formValue={formValue}
          onChange={onChange} 
          {...section}
        />
      ))}
    </form>
  );
};

export default Form;