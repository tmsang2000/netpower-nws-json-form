import React from "react";
import { render } from "@testing-library/react";

import FormSection from "./FormSection";

describe("Test 1", () => {
  test("Section with no input", () => {
    render(
      <FormSection
        title="Test"
        id="test"
      />
    );
  });
});

describe("Test 2", () => {
  test("Section with no title and id", () => {
    render(
      <FormSection />
    );
  });
});

describe("Test 3", () => {
  test("Section with single input", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test',
            name: 'test',
            label: 'test'
          }
        ]}
      />
    );
  });
});

describe("Test 4", () => {
  test("Section with multiple input", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test1',
            name: 'test1',
            label: 'test1'
          },
          {
            id: 'test2',
            name: 'test2',
            label: 'test2',
            type: 'number'
          },
          {
            id: 'test3',
            name: 'test3',
            label: 'test3',
            type: 'checkbox'
          },
        ]}
      />
    );
  });
});

describe("Test 5", () => {
  test("Section with controlled input", () => {
    class FormSectionContainer extends React.Component {
      state = {
        value: {},
      }
      
      onChange = (newValue: any) => {
        this.setState({
          newValue,
        })
      }
      
      render() {
        return (
          <FormSection
            title="Test"
            id="test"
            input={[
              {
                id: 'test',
                name: 'test',
                label: 'test'
              }
            ]}
            formValue={this.state.value}
            onChange={this.onChange}
          />
        );
      }
    }

    render(
      <FormSectionContainer />
    );
  });
});

describe("Test 6", () => {
  test("Section with inputProps", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test',
            name: 'test',
            label: 'test',
            type: 'number',
            inputProps: {
              min: 5,
              max: 10
            }
          }
        ]}
      />
    );
  });
});

describe("Test 7", () => {
  test("Section with invalid inputProps", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test',
            name: 'test',
            label: 'test',
            inputProps: null
          }
        ]}
      />
    );
  });
});

describe("Test 8", () => {
  test("Section with invalid inputProps", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test',
            name: 'test',
            label: 'test',
            inputProps: "asdsad"
          }
        ]}
        
      />
    );
  });
});

describe("Test 9", () => {
  test("Section with invalid inputProps", () => {
    render(
      <FormSection 
        title="Test"
        id="test"
        input={[
          {
            id: 'test',
            name: 'test',
            label: 'test',
            inputProps: 123123
          }
        ]}
      />
    );
  });
});