import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/users/register", user);
      console.log(resp);
    } catch (error) {
      console.log("Registration Error ", error.message);
      toast.error("Registration Error ", error.message);
      //console.log(error.response.data.message);
    }
    //  return registerUserThunk('/auth/register', user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`Login User : ${user}`);
    //return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export default userSlice.reducer;
