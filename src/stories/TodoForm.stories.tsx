import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import TodoForm from "#components/Todo/TodoForm";
import React, { useState } from "react";
import { fn } from "@storybook/test";

const meta: Meta<typeof TodoForm> = {
  title: "Todo/TodoForm",
  component: TodoForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const mockSubmitHandler = fn();

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const ExampleForm: Story = {
  render: function Render(args) {
    const [value, setValue] = useState("");

    return (
      <div>
        <div style={{ marginBottom: "8px" }}>Value: {value}</div>
        <TodoForm
          onChangeForm={(e: any) => setValue(e)}
          onSubmitForm={() => {
            mockSubmitHandler();
          }}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = "Try storybook component test";
    await userEvent.type(canvas.getByTestId("todo-input"), input);
    await expect(canvas.getByText(input, { exact: false })).toBeInTheDocument();
    await userEvent.click(canvas.getByTestId("button-add"));
    await expect(mockSubmitHandler).toHaveBeenCalled();
  },
};
