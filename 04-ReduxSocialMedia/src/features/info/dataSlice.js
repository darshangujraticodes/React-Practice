import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const dataInfoSlice = {
  name: InfoSlice,
  initialState,
  reducers: {
    addData: (state, action) => {},
    showData: (state, action) => {},
  },
};

export const { addData, showData } = dataInfoSlice.actions;

export default dataInfoSlice.reducer;
