import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
  error: null,
  loading: false,
};

export const fetchApiData = createAsyncThunk(
  "githubApiThunk",
  async (args, { rejectWithValue }) => {
    try {
      // fetch github users data
      const response = await fetch("https://api.github.com/users");
      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to Fetch API Data!");
    }
  }
);

export const thunkSlice = createSlice({
  name: "api thunk",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.apiData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default thunkSlice.reducer;
