import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
