import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const isUserLogined =
//   typeof window !== "undefined" && localStorage.getItem("isLogined") !== null
//     ? JSON.parse(localStorage.getItem("isLogined") || "")
//     : null;

export interface IUsersInfo {
  email: string;
  password: string;
}

export interface IDataState {
  isLogined: boolean;
  database: IUsersInfo[];
  isModalOpen: boolean;
}

const initialState: IDataState = {
  // isLogined: isUserLogined !== null ? JSON.parse(isUserLogined) : false,
  isLogined: false,
  database: [
    {
      email: "admin",
      password: "12345",
    },
  ],
  isModalOpen: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUserInfoToDV(state, action: PayloadAction<IUsersInfo>) {
      state.database.push(action.payload)
    },
    setIsLoginedTrue(state) {
      console.log('setIsLoginedTrue');
      state.isLogined = true;
      // localStorage.setItem("isLogined", "true");
    },
    setIsLoginedFalse(state) {
      state.isLogined = false;
      // localStorage.setItem("isLogined", "false");
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
