import React, { ReactElement, useRef } from "react";
import { render, renderHook } from "@testing-library/react";
import Form from "./Form";

const testFormData = {
  label: 'Test form',
  section: [
    {
      id: "section-1",
      title: 'Section 1',
      input: [
        {
          id: 'input 1.1',
          name: 'input-1.1',
          label: 'Input 1.1'
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
    },
    {
      id: "section-2",
      title: 'Section 2',
      input: [
        {
          id: 'input 2.1',
          name: 'input-2.1',
          label: 'Input 2.1'
        },
        {
          id: 'input 2.2',
          name: 'input-2.2',
          label: 'Input 2.2'
        },
      ]
    },
    {
      id: "section-3",
      title: 'Section 3',
      input: [
        {
          id: 'input 3.1',
          name: 'input-3.1',
          label: 'Input 3.1'
        },
      ]
    },
  ]
}

describe("Test 1", () => {
  test("Render Form with no formOutput", () => {
    render(
      <Form 
        id="test-form" 
        formData={JSON.stringify(testFormData)} 
      />
    );
  });
});

describe("Test 2", () => {
  test("Render Form with formOutput", () => {
    const myRef = React.createRef<any>();

    render(
      <Form 
        id="test-form" 
        formData={JSON.stringify(testFormData)} 
        formOutput={myRef}
      />
    );
  });
});