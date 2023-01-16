import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, refresh, setAuthHeader, signupUser} from "services/apiToBackend";


export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await signupUser(userData);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await login(userData);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('no token');
    }

    console.log('refreshing user');
    setAuthHeader(token);

    try {
      const response = await refresh();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      console.log('looooout');
      const response = await logout();
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
