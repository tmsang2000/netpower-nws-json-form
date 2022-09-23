import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./Form";
import { useRef } from "@storybook/addons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const TestForm = () => {
  const myRef = useRef<any>(null);

  return (
    <div>
      <Form
        id="test-form"
        formData={JSON.stringify({
          label: 'Test form',
          section: [
            {
              title: 'Section 1',
              input: [
                {
                  id: 'input 1.1',
                  name: 'input1a',
                  label: 'Input 1.1'
                },
                {
                  id: 'input 1.2',
                  name: 'input1b',
                  label: 'Input 1.2'
                },
                {
                  id: 'input 1.3',
                  name: 'input1c',
                  label: 'Input 1.3'
                },
              ]
            },
            {
              title: 'Section 2',
              input: [
                {
                  id: 'input 2.1',
                  name: 'input2a',
                  label: 'Input 2.1'
                },
                {
                  id: 'input 2.2',
                  name: 'input2b',
                  label: 'Input 2.2'
                },
              ]
            },
            {
              title: 'Section 3',
              input: [
                {
                  id: 'input 3.1',
                  name: 'input3a',
                  label: 'Input 3.1'
                },
              ]
            },
          ]
        })}
        // formOutput={myRef}
      />
      <button 
        onClick={(e) => {
          console.log("My ref: ", myRef.current?.input1a?.value);
        }}> 
          Submit 
        </button>
    </div>
  )
}
