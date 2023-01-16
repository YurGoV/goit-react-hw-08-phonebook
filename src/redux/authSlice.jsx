import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {loginUser, refreshUser} from "./authOperations";
import {registerUser} from "./authOperations";
import {logoutUser} from "./authOperations";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => state)

      .addCase(logoutUser.pending, (state, action) => state)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = {name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => state)

      .addCase(loginUser.pending, (state, action) => state)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => state)

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
});

export const persistAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
