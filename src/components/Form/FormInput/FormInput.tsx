import React from "react";
import "./FormInput.scss";

export interface FormInputProps {
  id: string,
  name: string,
  label?: string,
  type?: "text" | "number" | "checkbox" | "textarea",
  align?: "row" | "column",
  formValue?: any,
  onChange?: (e: any) => void,
  inputProps?: any,
  inputOrder?: 'default' | 'reverse'
}

const inputType = ["text", "number", "checkbox", "textarea"];
const defaultInputType = "text";
const inputAlign = ["row", "column"];
const defaultInputAlign = "column";
const inputOrderType = ["default", "reverse"];
const defaultInputOrder = "default"

const FormInput = (props: FormInputProps) => {
  const { 
    id, 
    name, 
    label, 
    type = defaultInputType, 
    align = defaultInputAlign,
    formValue,
    onChange,
    inputProps,
    inputOrder
  } = props;
  const inputTypeProps = type && inputType.includes(type) 
                      ? type : defaultInputType
  const alignment = align && inputAlign.includes(align) 
                      ? align : defaultInputAlign;
  const otherInputProps = typeof inputProps === 'object' 
                            ? inputProps : {};
  const inputOrderProps = inputOrder && inputOrderType.includes(inputOrder)
                            ? inputOrder : defaultInputOrder;

  const onInputChange = (e: any) => {
    if (!formValue || !onChange) return;
    const newState: any = { ...formValue };
    const value = type === 
      'checkbox' 
        ? e.target.checked 
        : e.target.value;
    newState[name] = value;
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
        <p 
          className="form-input-label"
          style={{
            order: inputOrderProps === 'default' ? 1 : 2
          }}
        > 
          {label} 
        </p>
      )}
      {inputTypeProps === 'textarea'
        ? (
          <textarea 
            id={id}
            name={name}
            className="form-input"
            type={inputTypeProps}
            onChange={onInputChange}
            style={{
              order: inputOrderProps === 'default' ? 2 : 1
            }}
            {...otherInputProps}
          />
        )
        : (
          <input 
            id={id}
            name={name}
            className="form-input"
            type={inputTypeProps}
            onChange={onInputChange}
            style={{
              order: inputOrderProps === 'default' ? 2 : 1,
              width: inputTypeProps === 'checkbox' ? 'fit-content' : 'auto'
            }}
            {...otherInputProps}
          />
        )
      }
      
    </div>
  );
};

export default FormInput;