import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import dataReducer from "../features/info/dataSlice";
import cartReducer from "../features/cart/cartSlice";
import toolkitReducer from "../features/reduxtoolkitApi/toolkitApiSlice";

export const store = configureStore({
  reducer: {
    todoStoreReducer: todoReducer,
    dataStoreReducer: dataReducer,
    cartStoreReducer: cartReducer,
    toolkitStoreReducer: toolkitReducer,
  },
});
