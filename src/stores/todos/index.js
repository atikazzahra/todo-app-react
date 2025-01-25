import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    form: {},
  },
  reducers: {
    setTodos: (state, { payload: todos }) => {
      state.list = [...todos];
    },
    addTodo: (state, { payload: newTodo }) => {
      state.list.unshift(newTodo);
    },
    removeTodo: (state, { payload: id }) => {
      const idx = state.list.findIndex((e) => e.id === id);
      if (idx > -1) {
        state.list.splice(idx, 1);
      }
    },
    completeTodo: (state, { payload: id }) => {
      const idx = state.list.findIndex((e) => e.id === id);
      if (idx > -1) {
        state.list[idx] = {
          ...state.list[idx],
          completed: true,
        };
      }
    },
    setForm: (state, { payload: newForm }) => {
      state.form = {
        userId: 1,
        id: uuidv4(),
        title: newForm,
        completed: false,
      };
    },
  },
});

const asyncActions = {
  fetchTodoAsync: () => async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const res = await response.json();
      dispatch(setTodos(res));
    } catch (err) {
      console.log(err);
    }
  },
  submitNewTodoAsync: () => async (dispatch, getState) => {
    const state = getState();
    dispatch(addTodo(state.todos.form));
    dispatch(setForm(""));
  },
};

export const { addTodo, removeTodo, completeTodo, setTodos, setForm } =
  todosSlice.actions;

export const { fetchTodoAsync, submitNewTodoAsync } = asyncActions;

export default todosSlice.reducer;
