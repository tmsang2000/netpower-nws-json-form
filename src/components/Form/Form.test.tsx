import React, { useRef } from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

const testFormData = {
  label: 'Test form',
  formFields: [
    {
      id: 'input-1',
      name: 'input-1',
      label: 'Input 1',
      inputProps: {
        maxLength: 10
      }
    },
    {
      id: 'input-2',
      name: 'input-2',
      label: 'Input 2',
      type: 'checkbox',
    },
    {
      id: 'input-3',
      name: 'input-3',
      label: 'Input 3',
      type: 'checkbox',
      options: [
        {
          name: 'option-1',
          label: 'Option 1',
          optionProps: {
            disabled: true
          }
        },
        {
          name: 'option-2',
          label: 'Option 2',
        },
      ]
    },
    {
      id: 'input-4',
      name: 'input-4',
      label: 'Input 4',
      type: 'radio',
      options: [
        {
          name: 'option-1',
          label: 'Option 1',
          value: 'option-1'
        },
        {
          name: 'option-2',
          label: 'Option 2',
          value: 'option-2'
        },
      ]
    },
  ]
}

describe("Test 1", () => {
  test("Render form", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
      />
    );
  });
});

describe("Test 2", () => {
  test("Render with formProps", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        formProps={{
          style: {
            marginTop: 10
          }
        }}
      />
    );
  });
});

describe("Test 3", () => {
  test("Render with invalid formProps", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        formProps={'abc'}
      />
    );
  });
});

describe("Test 4", () => {
  test("Render with titleStyles", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        titleStyles={{
          fontSize: '40px'
        }}
      />
    );
  });
});

describe("Test 5", () => {
  test("Render with formErrors props", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        formErrors={{
          'input-1': true
        }}
      />
    );
  });
});

describe("Test 6", () => {
  test("Render with invalid titleStyles", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        titleStyles={123}
      />
    );
  });
});

describe("Test 7", () => {
  test("Render Controlled Form", () => {
    class FormContainer extends React.Component {
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
          <Form 
            formData={JSON.stringify(testFormData)}
            formValue={this.state.value}
            onChange={this.onChange}
            titleStyles={{
              fontSize: '40px'
            }}
            formProps={{
              style: {
                marginTop: 10
              }
            }}
          />
        );
      }
    }

    render(
      <FormContainer />
    );
  });
});

describe("Test 8", () => {
  test("Render Uncontrolled Form", () => {
    function FormContainer() {
      const myRef = useRef();
      
      return (
        <Form 
          formData={JSON.stringify(testFormData)}
          titleStyles={{
            fontSize: '40px'
          }}
          formProps={{
            ref: myRef,
            style: {
              marginTop: 10
            }
          }}
        />
      );
    }

    render(
      <FormContainer />
    );
  });
});

describe("Test 9", () => {
  test("Render with invalid formErrors props", () => {
    render(
      <Form 
        formData={JSON.stringify(testFormData)} 
        formErrors={12}
      />
    );
  });
});

describe("Test 10", () => {
  test("Render with invalid formData", () => {
    render(
      <Form 
        formData={''} 
      />
    );
  });
});

describe("Test 11", () => {
  test("Render with invalid formErrors props", () => {
    render(
      <Form 
        formData={123} 
      />
    );
  });
});

describe("Test 12", () => {
  test("Render with invalid formErrors props", () => {
    render(
      <Form 
        formData={'abc'} 
      />
    );
  });
});

describe("Test 13", () => {
  test("Render with invalid formErrors props", () => {
    render(
      <Form 
        formData={'{abc, 123, a}'} 
      />
    );
  });
});