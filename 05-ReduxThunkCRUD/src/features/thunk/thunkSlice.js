import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
  error: null,
  loading: false,
};

const fetchApiData = createAsyncThunk(apiData, async () => {});

export const thunkSlice = createSlice({
  name: "api thunk",
  initialState,
  extraReducers: {},
});
