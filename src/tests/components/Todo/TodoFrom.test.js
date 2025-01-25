import { describe, expect, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import TodoFrom from "../../../components/Todo/TodoForm.tsx";
import React from "react";

describe("TodoForm", () => {
  test("initial state form", async () => {
    const mockOnSubmitHandler = jest.fn();
    const mockOnChangeHandler = jest.fn();

    const { getByTestId, asFragment } = render(
      <TodoFrom
        onSubmitForm={() => {
          mockOnSubmitHandler();
        }}
        onChangeForm={() => {
          mockOnChangeHandler();
        }}
      />
    );

    expect(getByTestId("todo-input")).toHaveValue("");
    expect(getByTestId("button-add")).toHaveAttribute("disabled");
    expect(asFragment()).toMatchSnapshot();
  });

  test("upate input form", async () => {
    const mockOnSubmitHandler = jest.fn();
    const mockOnChangeHandler = jest.fn();

    const { getByTestId } = render(
      <TodoFrom
        onSubmitForm={() => {
          mockOnSubmitHandler();
        }}
        onChangeForm={() => {
          mockOnChangeHandler();
        }}
      />
    );

    const input = getByTestId("todo-input");
    const value = "Testing";
    fireEvent.change(input, { target: { value: value } });
    expect(getByTestId("todo-input")).toHaveValue(value);
    expect(getByTestId("button-add")).not.toHaveAttribute("disabled");
    expect(mockOnChangeHandler).toHaveBeenCalled();
  });
});
