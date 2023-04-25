import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const isUserLogined =
  typeof window !== "undefined" && localStorage.getItem("isLogined") !== null
    ? JSON.parse(localStorage.getItem("isLogined") || "")
    : null;

export interface IUsersInfo {
  login: string;
  password: string;
}

export interface IDataState {
  isLogined: boolean
  database: IUsersInfo[]
}

const initialState: IDataState = {
  isLogined: isUserLogined !== null ? JSON.parse(isUserLogined) : false,
  database: [
    {
      login: "admin",
      password: "12345",
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsLoginedTrue(state) {
      state.isLogined = true;
      localStorage.setItem("isLogined", "true");
    },
    setIsLoginedFalse(state) {
      state.isLogined = false;
      localStorage.setItem("isLogined", "false");
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
