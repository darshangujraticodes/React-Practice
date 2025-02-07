import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

import dataReducer from "../features/info/dataSlice";

export const store = configureStore({
  //   reducer: todoReducer,
  reducer: dataReducer,
});
