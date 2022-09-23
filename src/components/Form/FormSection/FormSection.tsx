import React from "react";
import FormInput from "../FormInput";
import { FormInputProps } from "../FormInput/FormInput";
import "./FormSection.scss";

export interface FormSectionProps {
  title: string,
  id: string,
  input?: FormInputProps[],
  formValue?: any,
  onChange?: (e: any) => void,
}

const FormSection = (props: FormSectionProps) => {
  const { 
    title, 
    id, 
    input,
    formValue,
    onChange,
  } = props;

  return (
    <div key={id}>
      <h3> {title} </h3>
      {input && input.map((inputBlock: FormInputProps) => (
        <FormInput 
          key={inputBlock.id}
          formValue={formValue}
          onChange={onChange}
          {...inputBlock}
        />
      ))}
    </div>
  );
};

export default FormSection;