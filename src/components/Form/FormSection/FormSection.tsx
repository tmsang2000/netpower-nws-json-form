import React from "react";
import FormInput from "../FormInput";
import { FormInputProps } from "../FormInput/FormInput";
import "./FormSection.scss";

export interface FormSectionProps {
  title: string,
  id: string,
  input?: FormInputProps[];
}

const FormSection = (props: FormSectionProps) => {
  const { title, id, input } = props;

  return (
    <div key={id}>
      <h3> {title} </h3>
      {input && input.map((inputBlock: FormInputProps) => (
        <FormInput key={inputBlock.id} {...inputBlock}/>
      ))}
    </div>
  );
};

export default FormSection;