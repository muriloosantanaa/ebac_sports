import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchSports = createAsyncThunk(
  "sports/fetchSports",
  async () => {
    const response = await api.get("/sports");
    return response.data;
  }
);

const sportsSlice = createSlice({
  name: "sports",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSports.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default sportsSlice.reducer;
