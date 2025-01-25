import * as React from "react";
import { useState, useEffect } from "react";

interface TodoFormProps {
  /** Event handler when input value changes */
  onChangeForm: (event: any) => void;
  /** Submit handler when clicking btn add */
  onSubmitForm: () => void;
}

/** Form to add new todo for Todo feature */
export default function TodoFrom({
  onChangeForm,
  onSubmitForm,
}: TodoFormProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChangeForm(value);
  }, [value]);

  const onSubmit = () => {
    onSubmitForm();
    setValue("");
  };

  return (
    <div className="todo-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your new todo..."
          aria-label="todo-input"
          aria-describedby="todo-input"
          data-testid="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          type="button"
          data-testid="button-add"
          disabled={!value}
          onClick={() => onSubmit()}
        >
          Add
        </button>
      </div>
    </div>
  );
}
