import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { filterType } from "../types/commonTypes";
import { AppState } from "./redux";

export interface FilterState {
  filter: filterType[]
}

const initialState: FilterState = { filter: [] };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {

    initializeFilterState(state, action) {
      state.filter = action.payload;
    },

    // extraReducers: {
    //   [HYDRATE]: (state: any, action: { payload: filterType[] }) => {
    //     return {
    //       ...state,
    //       ...action.payload.filter,
    //     };
    //   },
    // },
  },
});

export const filterActions = filterSlice.actions;

export const initializeFilterState = (state: AppState) => state.filter.filter;

export default filterSlice.reducer;
