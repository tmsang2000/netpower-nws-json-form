import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormSection from "./FormSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FormSection",
  component: FormSection,
} as ComponentMeta<typeof FormSection>;

export const TestFormSection = () => {
  const [value, setValue] = React.useState({});

  const onValueChange = (newValue: any) => {
    console.log("Current form", value);
    setValue(newValue);
    console.log("Updated form: ", newValue);
  }

  return (
    <FormSection
      title="Test"
      id="test"
      input={[
        {
          id: 'test1',
          name: 'test1',
          label: 'test1',
          inputProps: {
            maxLength: 10,
            adasd: 2321
          }
        },
        {
          id: 'test2',
          name: 'test2',
          label: 'test2',
          type: 'number',
          inputProps: {
            min: 5,
            max: 10
          }
        },
        {
          id: 'test3',
          name: 'test3',
          label: 'test3',
          type: 'checkbox'
        },
      ]}
      formValue={value}
      onChange={onValueChange}
    />
  )
}