import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { filterSlice } from "./slices/filterSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: {
      [filterSlice.name]: filterSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(store);
