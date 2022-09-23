import React from "react";
import { render, renderHook } from "@testing-library/react";

import FormInput from "./FormInput";

describe("Test 1", () => {
  test("Uncontrolled Input", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
      />
    );
  });
});

describe("Test 2", () => {
  test("Controlled input", () => {
    class FormInputContainer extends React.Component {
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
          <FormInput 
            id="test"
            name="test"
            label="test"
            formValue={this.state.value}
            onChange={this.onChange}
          />
        );
      }
    }

    render(
      <FormInputContainer />
    );
  });
});

describe("Test 3", () => {
  test("Input type number", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="number"
      />
    );
  });
});

describe("Test 4", () => {
  test("Input type checkbox", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
      />
    );
  });
});

describe("Test 5", () => {
  test("Input with no label", () => {
    render(
      <FormInput 
        id="test"
        name="test"
      />
    );
  });
});

describe("Test 6", () => {
  test("Input with empty id and name", () => {
    render(
      <FormInput 
        id=""
        name=""
      />
    );
  });
});

describe("Test 7", () => {
  test("Input with no id and name", () => {
    render(
      <FormInput />
    );
  });
});

describe("Test 8", () => {
  test("Input with wrong type props", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        type="aaa"
      />
    );
  });
});

describe("Test 9", () => {
  test("Input with align row", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        align="row"
      />
    );
  });
});

describe("Test 10", () => {
  test("Input with wrong alignment", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        align="aaa"
      />
    );
  });
});

describe("Test 11", () => {
  test("Input with inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        type="number"
        inputProps={{
          max: 5,
          min: 3
        }}
      />
    );
  });
});

describe("Test 12", () => {
  test("Input with invalid inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        type="number"
        inputProps={null}
      />
    );
  });
});

describe("Test 13", () => {
  test("Input with invalid inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        type="number"
        inputProps={123123}
      />
    );
  });
});

describe("Test 14", () => {
  test("Input with invalid inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        type="number"
        inputProps={"asdasd"}
      />
    );
  });
});