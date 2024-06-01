import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState = <UserState>{
  user: {},
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
      state.isLoading = false;
      state.error = null;
    },

    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },

    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
      state.error = null;
    },

    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
