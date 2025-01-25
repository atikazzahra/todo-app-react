import "./TodoItem.css";
import { useRef } from "react";

export default function TodoItem({ item, onItemComplete, onItemDelete }) {
  const itemRef = useRef(null);
  const actionComplete = (id) => {
    itemRef.current.classList.add("gradient-background");
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
        >
          <i className="bi bi-check2"></i>
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => onItemDelete(item.id)}
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    </li>
  );
}
