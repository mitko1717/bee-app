import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainState } from "../../models/interfaces";

export const initialMainState: MainState = {
  priceRange: [0, 50],
  beeType: {
    "Большая индийская пчела": { checked: false, disabled: true },
    "Медоносная пчела": { checked: false, disabled: true },
    "Индийская пчела": { checked: false, disabled: false },
    "Арликова пчела": { checked: false, disabled: false },
  },
  beeBelly: {},
  chosenClothes: [],
};

export const initDataResult = {
  beeType: [],
  belly: [],
  clothes: {},
  price: 0,
}

const isUserLogined =
  typeof window !== "undefined" && localStorage.getItem("isLogined") !== null
    ? JSON.parse(localStorage.getItem("isLogined") || "")
    : null;

export interface IUsersInfo {
  email: string;
  password: string;
}

interface IDataResultUpdate {
  key: string;
  value: any;
}

type DataResultKey = "beeType" | "belly" | "clothes" | "price";

interface DataResult {
  beeType: string[];
  belly: string[];
  clothes: any;
  price: number;
}

export interface IDataState {
  isLogined: boolean;
  database: IUsersInfo[];
  isModalOpen: boolean;
  dataResult: DataResult;
  initialState: any;
}

const initialState: IDataState = {
  isLogined: isUserLogined !== null ? JSON.parse(isUserLogined) : false,
  database: [
    {
      email: "admin",
      password: "12345",
    },
  ],
  isModalOpen: false,
  dataResult: {
    beeType: [],
    belly: [],
    clothes: {},
    price: 0,
  },
  initialState: initialMainState,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateDataResult(state, action: PayloadAction<IDataResultUpdate>) {
      const { key, value } = action.payload;
      state.dataResult[key as DataResultKey] = value;
    },
    addUserInfoToDV(state, action: PayloadAction<IUsersInfo>) {
      state.database.push(action.payload);
    },
    setIsLoginedTrue(state) {
      state.isLogined = true;
      localStorage.setItem("isLogined", "true");
    },
    setIsLoginedFalse(state) {
      state.isLogined = false;
      localStorage.setItem("isLogined", "false");
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    updateInitState(state, action) {
      state.initialState = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
