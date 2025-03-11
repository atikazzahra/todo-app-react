import * as React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoItem from "#components/Todo/TodoItem.tsx";

describe("TodoItem", () => {
  const item = { id: 1, title: "Test Todo", completed: false };
  const onItemComplete = jest.fn();
  const onItemDelete = jest.fn();

  it("should render correctly", () => {
    render(
      <TodoItem
        item={item}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("should call onItemComplete when complete button is clicked", async () => {
    render(
      <TodoItem
        item={item}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    fireEvent.click(screen.getByTestId("complete-button-1"));
    await waitFor(() => expect(onItemComplete).toHaveBeenCalledWith(1), {
      timeout: 600,
    });
  });

  it("should call onItemDelete when delete button is clicked", () => {
    render(
      <TodoItem
        item={item}
        onItemComplete={onItemComplete}
        onItemDelete={onItemDelete}
      />
    );
    fireEvent.click(screen.getByTestId("delete-button-1"));
    expect(onItemDelete).toHaveBeenCalledWith(1);
  });
});
