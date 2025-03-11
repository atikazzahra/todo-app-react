import * as React from "react";
import "./TodoItem.css";
import { useRef } from "react";

interface TodoItemProps {
  item: {
    id: number;
    title: string;
    completed: boolean;
  };
  onItemComplete: (id: number) => void;
  onItemDelete: (id: number) => void;
}

export default function TodoItem({
  item,
  onItemComplete,
  onItemDelete,
}: TodoItemProps) {
  const itemRef = useRef<HTMLLIElement>(null);
  const actionComplete = (id: number) => {
    if (itemRef.current) {
      itemRef.current.classList.add("gradient-background");
    }
    setTimeout(() => {
      onItemComplete(id);
    }, 500);
  };

  return (
    <li className="list-group-item d-flex" ref={itemRef}>
      <div className="list-group-item--content p-2 flex-fill">{item.title}</div>
      <div className="btn-group btn-group-sm align-self-center">
        <button
          type="button"
          className={`btn ${
            !item.completed ? `btn-outline-secondary` : `btn-success`
          }`}
          disabled={item.completed}
          onClick={() => actionComplete(item.id)}
          data-testid={`complete-button-${item.id}`}
        >
          <i className="bi bi-check2"></i>
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => onItemDelete(item.id)}
          data-testid={`delete-button-${item.id}`}
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    </li>
  );
}
