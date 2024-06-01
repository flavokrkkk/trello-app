import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "../reducers/userSlice/userSlice";
import { $authHost, $host } from "../../api";
import { IToken } from "../../models/IToken";
import { IUser } from "../../models/IUser";
import { jwtDecode } from "jwt-decode";
import { AppDispatch } from "..";

export const AsyncActionCreators = {
  setUser: userActions.setUser,
  setIsAuth: userActions.setIsAuth,
  setIsLoading: userActions.setIsLoading,
  setError: userActions.setError,

  authorizeUserAsync: createAsyncThunk<
    string,
    IUser,
    { rejectValue: string; dispatch: AppDispatch }
  >(
    "user/authorizeUserAsync",
    async (requestParams: IUser, { rejectWithValue, dispatch }) => {
      try {
        dispatch(AsyncActionCreators.setIsLoading(true));
        const { data } = await $host.post<IToken>(
          "/user/registration",
          requestParams
        );
        const user = jwtDecode(data.token);
        localStorage.setItem("token", data.token);
        dispatch(AsyncActionCreators.setIsAuth(true));
        dispatch(AsyncActionCreators.setUser(user as IUser));
        return data.token;
      } catch (error) {
        dispatch(AsyncActionCreators.setError(`${error}`));
        return rejectWithValue(`${error}`);
      }
    }
  ),

  loginUserAsync: createAsyncThunk<
    string,
    IUser,
    { rejectValue: string; dispatch: AppDispatch }
  >(
    "user/authenticateUserAsync",
    async (requestParams: IUser, { rejectWithValue, dispatch }) => {
      try {
        dispatch(AsyncActionCreators.setIsLoading(true));
        const { data } = await $host.post<IToken>("/user/login", requestParams);
        const user = jwtDecode(data.token);
        localStorage.setItem("token", data.token);
        dispatch(AsyncActionCreators.setIsAuth(true));
        dispatch(AsyncActionCreators.setUser(user as IUser));
        return data.token;
      } catch (error) {
        dispatch(AsyncActionCreators.setError(`${error}`));
        return rejectWithValue(`${error}`);
      }
    }
  ),

  authenticateUserAsync: createAsyncThunk(
    "user/authenticateUserAsync",
    async (_, { dispatch, rejectWithValue }) => {
      try {
        dispatch(AsyncActionCreators.setIsLoading(true));
        const { data } = await $authHost.get<IToken>("/user/auth");
        localStorage.setItem("token", data.token);
        const user = jwtDecode(data.token);
        if (localStorage.getItem("token")) {
          dispatch(AsyncActionCreators.setIsAuth(true));
          dispatch(AsyncActionCreators.setUser(user as IUser));
          return data.token;
        }
      } catch (error) {
        dispatch(AsyncActionCreators.setError(`${error}`));
        return rejectWithValue(`${error}`);
      }
    }
  ),

  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("token");
    dispatch(AsyncActionCreators.setIsAuth(false));
    dispatch(AsyncActionCreators.setUser({} as IUser));
  },
};
