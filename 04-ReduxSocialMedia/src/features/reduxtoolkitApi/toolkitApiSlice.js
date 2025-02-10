import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk(
  "usersData",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();

      return result;
    } catch (e) {
      console.log(e);
      return rejectWithValue(
        "Opps Found An Error ! Please Check Server or Target Link! "
      );
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const toolkitSlice = createSlice({
  name: "toolkit api",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(getAllData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const { fetchData, removeData, displayData } = toolkitSlice.actions;

export default toolkitSlice.reducer;
