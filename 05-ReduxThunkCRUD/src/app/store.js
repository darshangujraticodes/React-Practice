import { configureStore } from "@reduxjs/toolkit";

import thunkReducer from "../features/thunk/thunkSlice";
import userReducer from "../features/thunk/singleUserInfoSlice";

export const store = configureStore({
  reducer: {
    thunkStoreReducer: thunkReducer,
    userStoreReducer: userReducer,
  },
});
