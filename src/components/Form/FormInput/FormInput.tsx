import React from "react";
import "./FormInput.scss";

export interface FormInputProps {
  id: string,
  name: string,
  label?: string,
  type?: "text" | "number" | "checkbox",
  align?: "row" | "column",
  formValue?: any,
  onChange?: (e: any) => void,
  inputProps?: any
}

const inputType = ["text", "number", "checkbox"];
const defaultInputType = "text";
const inputAlign = ["row", "column"];
const defaultInputAlign = "column"

const FormInput = (props: FormInputProps) => {
  const { 
    id, 
    name, 
    label, 
    type = defaultInputType, 
    align = defaultInputAlign,
    formValue,
    onChange,
    inputProps
  } = props;
  const alignment = align && inputAlign.includes(align) 
                      ? align : defaultInputAlign;
  const otherInputProps = typeof inputProps === 'object' 
                            ? inputProps : {}

  const onInputChange = (e: any) => {
    if (!formValue || !onChange) return;
    const newState: any = { ...formValue };
    newState[name] = e.target.value;
    onChange(newState);
  }

  return (
    <div 
      key={id}
      className={
        alignment === 'row' 
          ? 'form-input-align-row' 
          : 'form-input-align-column'
      }
    >
      {label && (
        <p className="form-input-label"> 
          {label} 
        </p>
      )}
      <input 
        id={id}
        name={name}
        type={type && inputType.includes(type) ? type : defaultInputType}
        onChange={onInputChange}
        {...otherInputProps}
      />
    </div>
  );
};

export default FormInput;