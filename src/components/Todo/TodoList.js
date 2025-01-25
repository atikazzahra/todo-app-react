import "./TodoList.css";
import TodoItem from "#components/Todo/TodoItem";

export default function TodoList({ items, onItemComplete, onItemDelete }) {
  const loadingState = () => (
    <li className="list-group-item d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </li>
  );
  return (
    <div className="todo-list">
      <ul className="list-group">
        {items.map((e) => (
          <TodoItem
            item={e}
            key={e.id}
            onItemDelete={onItemDelete}
            onItemComplete={onItemComplete}
          />
        ))}
        {!items.length && loadingState()}
      </ul>
    </div>
  );
}
