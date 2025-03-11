import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoSummary from "#components/Todo/TodoSummary.tsx";
import { TODO_STATUS } from "#constant/todo-status";

describe("TodoSummary", () => {
  const summary = { ALL: 10, COMPLETED: 5, TODO: 5 };
  const onChangeStatus = jest.fn();

  it("renders correctly", () => {
    render(
      <TodoSummary
        summary={summary}
        status={TODO_STATUS.all}
        onChangeStatus={onChangeStatus}
      />
    );
    expect(screen.getByLabelText(/All/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Completed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Todo/i)).toBeInTheDocument();
  });

  it("checks the correct radio button based on status prop", () => {
    render(
      <TodoSummary
        summary={summary}
        status={TODO_STATUS.completed}
        onChangeStatus={onChangeStatus}
      />
    );
    expect(screen.getByLabelText(/Completed/i)).toBeChecked();
  });

  it("calls onChangeStatus with the correct argument when a radio button is clicked", () => {
    render(
      <TodoSummary
        summary={summary}
        status={TODO_STATUS.all}
        onChangeStatus={onChangeStatus}
      />
    );
    fireEvent.click(screen.getByLabelText(/Completed/i));
    expect(onChangeStatus).toHaveBeenCalledWith(TODO_STATUS.completed);
  });
});
