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
};

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

export type DataResult = {
  beeType: string[];
  belly: string[];
  clothes: string[];
  price: number;
  number?: number;
  time?: string;
  [index: string]: any;
};

export interface IDataState {
  isLogined: boolean;
  database: IUsersInfo[];
  isModalOpen: boolean;
  dataResult: DataResult;
  initialState: any;
  savedResults: DataResult[];
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
    clothes: [],
    price: 0,
  },
  initialState: initialMainState,
  savedResults: [],
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
    saveDataResult(state) {
      state.savedResults.push({
        ...state.dataResult,
        number: Math.floor(100000 + Math.random() * 900000),
        time: new Date().toLocaleDateString("en-US"),
      });
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
