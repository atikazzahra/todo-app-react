import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodoAsync,
  submitNewTodoAsync,
  setForm,
  removeTodo,
  completeTodo,
} from "./stores/todos";
import { useEffect, useState } from "react";

import { TODO_STATUS } from "#constant/todo-status";

import TodoFrom from "#components/Todo/TodoForm";
import TodoList from "#components/Todo/TodoList";
import TodoSummary from "#components/Todo/TodoSummary";

function App() {
  const [status, setStatus] = useState(TODO_STATUS.all);
  const todos = useSelector((state) => state.todos.list || {});
  const summary = todos.reduce(
    (acc, e) => {
      acc[TODO_STATUS.all]++;
      if (e.completed) {
        acc[TODO_STATUS.completed]++;
      } else {
        acc[TODO_STATUS.todo]++;
      }
      return acc;
    },
    {
      ALL: 0,
      COMPLETED: 0,
      TODO: 0,
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoAsync());
  }, []);

  const onChangeNewTodo = (value) => {
    dispatch(setForm(value));
  };

  const onSubmitNewTodo = () => {
    if (status === TODO_STATUS.completed) {
      setStatus(TODO_STATUS.todo);
    }
    dispatch(submitNewTodoAsync());
  };

  const onItemComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const onItemDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <section className="App">
      <div className="wrapper">
        <header>
          <h1>TO DO LIST</h1>
        </header>
        <TodoFrom
          onChangeForm={onChangeNewTodo}
          onSubmitForm={onSubmitNewTodo}
        />
        <TodoList
          data-testid="list"
          items={todos.filter((e) => {
            if (status === TODO_STATUS.all) {
              return true;
            }
            if (status === TODO_STATUS.completed) {
              return e.completed;
            }
            return !e.completed;
          })}
          onItemComplete={onItemComplete}
          onItemDelete={onItemDelete}
        />
        <TodoSummary
          summary={summary}
          status={status}
          onChangeStatus={setStatus}
        />
      </div>
    </section>
  );
}

export default App;
