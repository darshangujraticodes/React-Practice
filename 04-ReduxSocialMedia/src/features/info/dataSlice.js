import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const dataInfoSlice = createSlice({
  name: "DataInfo",
  initialState,
  reducers: {
    dataIncrement: (state) => {
      state.value += 1;
    },
    addData: (state, action) => {
      state.value = action.payload;
    },
    showData: (state, action) => {
      state.value = state.value;
    },
  },
});

export const { addData, showData, dataIncrement } = dataInfoSlice.actions;

export default dataInfoSlice.reducer;
