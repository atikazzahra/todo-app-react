import * as React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoList from "#components/Todo/TodoList.tsx";

describe("TodoList", () => {
  const items = [
    { id: 1, title: "Test Todo 1", completed: false },
    { id: 2, title: "Test Todo 2", completed: true },
  ];
  const onItemComplete = jest.fn();
  const onItemDelete = jest.fn();

  it("should render correctly", () => {
    render(
      <TodoList
        items={items}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });

  it("should call onItemComplete when complete button is clicked", async () => {
    render(
      <TodoList
        items={items}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    const completeButtons = screen.getAllByTestId(/complete-button-/i);
    fireEvent.click(completeButtons[0]);
    await waitFor(() => expect(onItemComplete).toHaveBeenCalledWith(1), {
      timeout: 600,
    });
  });

  it("should call onItemDelete when delete button is clicked", () => {
    render(
      <TodoList
        items={items}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    const deleteButtons = screen.getAllByTestId(/delete-button-/i);
    fireEvent.click(deleteButtons[0]);
    expect(onItemDelete).toHaveBeenCalledWith(1);
  });
});
