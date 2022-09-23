import React from "react";
import { render } from "@testing-library/react";

import FormInput from "./FormInput";

describe("FormInput Test 1", () => {
  test("Test 1", () => {
    render(
      <FormInput 
        id="test"
        name="test"
        label="test"
      />
    );
  });
});

describe("FormInput Test 2", () => {
  test("Test 2", () => {
    render(
      <FormInput 
        id="test1"
        name="test1"
      />
    );
  });
});

describe("FormInput Test 3", () => {
  test("Test 3", () => {
    render(
      <FormInput 
        id=""
        name=""
      />
    );
  });
});

describe("FormInput Test 4", () => {
  test("Test 4", () => {
    render(
      <FormInput 
        id=""
      />
    );
  });
});

describe("FormInput Test 5", () => {
  test("Test 5", () => {
    render(
      <FormInput 
        id=""
        name=""
        type="number"
      />
    );
  });
});

describe("FormInput Test 6", () => {
  test("Test 6", () => {
    render(
      <FormInput 
        id=""
        name=""
        type="checkbox"
      />
    );
  });
});

describe("FormInput Test 7", () => {
  test("Test 7", () => {
    render(
      <FormInput 
        id=""
        name=""
        type="aaa"
      />
    );
  });
});