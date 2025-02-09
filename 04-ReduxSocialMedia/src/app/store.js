import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import dataReducer from "../features/info/dataSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    todoStoreReducer: todoReducer,
    dataStoreReducer: dataReducer,
    cartStoreReducer: cartReducer,
  },
});
