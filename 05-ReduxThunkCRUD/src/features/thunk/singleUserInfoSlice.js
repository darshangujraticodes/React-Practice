import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleUserData = createAsyncThunk(
  "singleUserInfo",
  async (userUrl, { rejectWithValue }) => {
    try {
      //   console.log("Executed on Button click !!");
      //   console.log("userURL = ", userUrl);

      const response = await fetch(userUrl);
      const result = await response.json();

      //   console.log(result);

      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to Fetch API Data!");
    }
  }
);

const initialState = {
  userInfo: [],
  loading: false,
  error: "",
  githubUserUrl: "",
};

export const singleUserSlice = createSlice({
  name: "Single User Info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUserData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });

    builder.addCase(fetchSingleUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = singleUserSlice.actions;

export default singleUserSlice.reducer;
