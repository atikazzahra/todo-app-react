import { fireEvent, render, screen } from "@testing-library/react";
import TodoFrom from "#components/Todo/TodoForm.tsx";
import React from "react";

describe("TodoForm", () => {
  test("initial state form", async () => {
    const mockOnSubmitHandler = jest.fn();
    const mockOnChangeHandler = jest.fn();

    const { asFragment } = render(
      <TodoFrom
        onSubmitForm={() => {
          mockOnSubmitHandler();
        }}
        onChangeForm={() => {
          mockOnChangeHandler();
        }}
      />
    );

    expect(screen.getByTestId("todo-input")).toHaveValue("1");
    expect(screen.getByTestId("button-add")).toHaveAttribute("disabled");
    expect(asFragment()).toMatchSnapshot();
  });

  test("upate input form", async () => {
    const mockOnSubmitHandler = jest.fn();
    const mockOnChangeHandler = jest.fn();

    render(
      <TodoFrom
        onSubmitForm={() => {
          mockOnSubmitHandler();
        }}
        onChangeForm={() => {
          mockOnChangeHandler();
        }}
      />
    );

    const input = screen.getByTestId("todo-input");
    const value = "Testing";
    fireEvent.change(input, { target: { value: value } });
    expect(screen.getByTestId("todo-input")).toHaveValue(value);
    expect(screen.getByTestId("button-add")).not.toHaveAttribute("disabled");
    expect(mockOnChangeHandler).toHaveBeenCalled();
  });
});
