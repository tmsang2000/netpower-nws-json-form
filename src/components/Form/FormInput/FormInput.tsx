import React from "react";
import "./FormInput.scss";

export interface FormInputProps {
  id: string,
  name: string,
  label?: string,
  type?: "text" | "number" | "checkbox"
}

const inputType = ["text", "number", "checkbox"];
const defaultInputType = "text";

const FormInput = (props: FormInputProps) => {
  const { id, name, label, type } = props;

  return (
    <div key={id}>
      {label && (<p> {label} </p>)}
      <input 
        id={id}
        name={name}
        type={type && inputType.includes(type) ? type : defaultInputType}
      />
    </div>
  );
};

export default FormInput;