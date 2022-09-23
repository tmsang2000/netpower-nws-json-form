import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormInput from "./FormInput";

export default {
  title: "ReactComponentLibrary/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const FormInputText = Template.bind({});
FormInputText.args = {
  id: "test",
  name: "form-input-text",
  label: "Form Input Text",
};

export const FormInputNumber = Template.bind({});
FormInputNumber.args = {
  id: "test",
  name: "form-input-number",
  label: "Form Input Number",
  type: "number"
};

export const FormInputCheckbox = Template.bind({});
FormInputCheckbox.args = {
  id: "test",
  name: "form-input-checkbox",
  label: "Form Input Checkbox",
  type: "checkbox"
};

export const FormInputInvalid = Template.bind({});
FormInputInvalid.args = {
  id: "test",
  name: "form-input-checkbox",
  label: "Form Input Checkbox",
  type: "aa"
};