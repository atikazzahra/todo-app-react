import * as React from "react";
import "./TodoSummary.css";
import { TODO_STATUS } from "#constant/todo-status";
import { TodoSummaryCount } from "#types/todos.d";

export interface TodoSummaryProps {
  summary: TodoSummaryCount;
  status: boolean;
  onChangeStatus: (id: string) => void;
}

export default function TodoSummary({
  summary,
  status,
  onChangeStatus,
}: TodoSummaryProps) {
  return (
    <div className="todo-summary">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio-all"
          id="btnradio-all"
          autoComplete="off"
          checked={status === TODO_STATUS.all}
          onClick={() => {
            onChangeStatus(TODO_STATUS.all);
          }}
          readOnly
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio-all">
          All <span className="badge text-bg-light">{summary.ALL}</span>
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio-completed"
          id="btnradio-completed"
          autoComplete="off"
          checked={status === TODO_STATUS.completed}
          onClick={() => {
            onChangeStatus(TODO_STATUS.completed);
          }}
          readOnly
        />
        <label
          className="btn btn-outline-secondary"
          htmlFor="btnradio-completed"
        >
          Completed{" "}
          <span className="badge text-bg-light">{summary.COMPLETED}</span>
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio-todo"
          id="btnradio-todo"
          autoComplete="off"
          checked={status === TODO_STATUS.todo}
          onClick={() => {
            onChangeStatus(TODO_STATUS.todo);
          }}
          readOnly
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio-todo">
          Todo <span className="badge text-bg-light">{summary.TODO}</span>
        </label>
      </div>
    </div>
  );
}
