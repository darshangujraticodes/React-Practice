import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World !" }],
};

// slice -> reducer -> functionality

export const todoSlice = createSlice({
  name: "todoName",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoData = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(newTodoData);
    },
    removeTodo: (state, action) => {
      const removeId = action.payload;

      state.todos = state.todos.filter((item) => removeId != item.id);
    },

    updateTodo: (state, action) => {
      const newUpdateData = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
