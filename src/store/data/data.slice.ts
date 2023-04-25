import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IDataState, IPost, IQueries } from "../../models/interfaces";

const initialState = {};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // setData(state, action: PayloadAction<IPost[]>) {
    //   state.stateData = action.payload;
    // },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
