import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormSection from "./FormSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FormSection",
  component: FormSection,
} as ComponentMeta<typeof FormSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSection> = (args) => <FormSection {...args} />;

export const FormSectionTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormSectionTest.args = {
  title: "Test section 1",
  id: "test-section-1",
  input: [
    {
      id: 'input 1.1',
      name: 'input-1.1',
      label: 'Input 1.1',
    },
    {
      id: 'input 1.2',
      name: 'input-1.2',
      label: 'Input 1.2',
      type: 'number'
    },
    {
      id: 'input 1.3',
      name: 'input-1.3',
      label: 'Input 1.3',
      type: 'checkbox'
    },
  ]
};