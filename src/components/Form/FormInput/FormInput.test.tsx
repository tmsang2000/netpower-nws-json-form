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
  test("Input type checkbox with no options", () => {
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

describe("Test 4", () => {
  test("Input type checkbox with options", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        options={[
          {
            name: 'test1',
            label: 'Test 1'
          },
          {
            name: 'test2',
            label: 'Test 2'
          }
        ]}
      />
    );
  });
});

describe("Test 5", () => {
  test("Input type checkbox with options & optionProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        options={[
          {
            name: 'test1',
            label: 'Test 1',
            optionProps: {
              disabled: true
            }
          },
        ]}
      />
    );
  });
});

describe("Test 6", () => {
  test("Input type checkbox with no options & inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        inputProps={{
          disabled: true
        }}
      />
    );
  });
});

describe("Test 7", () => {
  test("Input with empty id and name", () => {
    render(
      <FormInput 
        id=""
        name=""
      />
    );
  });
});

describe("Test 8", () => {
  test("Input with no id and name", () => {
    render(
      <FormInput />
    );
  });
});

describe("Test 9", () => {
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

describe("Test 10", () => {
  test("Input type radio", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
        options={[
          {
            name: 'test1',
            label: 'test1',
            value: 'test1'
          },
          {
            name: 'test2',
            label: 'test2',
            value: 'test2'
          },
        ]}
      />
    );
  });
});

describe("Test 11", () => {
  test("Input type radio with optionProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
        options={[
          {
            name: 'test1',
            label: 'test1',
            value: 'test1',
            optionProps: {
              disabled: true
            }
          },
          {
            name: 'test2',
            label: 'test2',
            value: 'test2'
          },
        ]}
      />
    );
  });
});

describe("Test 12", () => {
  test("Input type radio with both inputProps & optionProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
        inputProps={{
          style: {
            marginTop: 10
          }
        }}
        options={[
          {
            name: 'test1',
            label: 'test1',
            value: 'test1',
            optionProps: {
              disabled: true
            }
          },
          {
            name: 'test2',
            label: 'test2',
            value: 'test2'
          },
        ]}
      />
    );
  });
});

describe("Test 13", () => {
  test("Input with inputProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        inputProps={{
          max: 5,
          min: 3
        }}
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
        inputProps={null}
      />
    );
  });
});

describe("Test 15", () => {
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

describe("Test 16", () => {
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

describe("Test 17", () => {
  test("Input type checkbox with invalid optionProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
        options={[
          {
            name: 'test1',
            label: 'test1',
            value: 'test1',
            optionProps: null
          },
          {
            name: 'test2',
            label: 'test2',
            value: 'test2',
            optionProps: "abc"
          },
        ]}
      />
    );
  });
});

describe("Test 18", () => {
  test("Input type radio with no options", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
      />
    );
  });
});

describe("Test 19", () => {
  test("Input type checkbox with invalid option", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        options={[
          {
            label: 'test1',
          },
          {
            name: 'test2',
          },
        ]}
      />
    );
  });
});

describe("Test 20", () => {
  test("Input type radio with invalid option", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="radio"
        options={[
          {
            label: 'test1',
          },
          {
            name: 'test2',
          },
          {
            name: 'test2',
            label: 'test1',
          },
        ]}
      />
    );
  });
});

describe("Test 21", () => {
  test("Input type checkbox with invalid optionProps", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        options={[
          {
            name: 'test1',
            label: 'test1',
            value: 'test1',
            optionProps: null
          },
          {
            name: 'test2',
            label: 'test2',
            value: 'test2',
            optionProps: "abc"
          },
        ]}
      />
    );
  });
});

describe("Test 22", () => {
  test("Input with error", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        error={true}
      />
    );
  });
});

describe("Test 23", () => {
  test("Input with invalid error", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        error="abvc"
      />
    );
  });
});

describe("Test 24", () => {
  test("Input with invalid error", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        type="checkbox"
        error={22}
      />
    );
  });
});

describe("Test 25", () => {
  test("Input with error", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
        error={true}
      />
    );
  });
});