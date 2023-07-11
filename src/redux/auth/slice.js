import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.isRefreshing = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  [signUp.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [logIn.pending]: (state, action) => {
    state.isRefreshing = true;
  },

  [logIn.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logIn.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [logOut.pending]: (state, action) => {
    state.isRefreshing = true; 
  },
  [logOut.fulfilled]: (state, action) => {
    state.user = { name: null, email: null, password: null };
    state.token = null;
    state.isLoggedIn = false;
  },
  [logOut.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [refreshUser.pending]: (state, action) => {
    state.isRefreshing = true;
  },
  [refreshUser.fulfilled]: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  },
  [refreshUser.rejected]: (state, action) => {
    state.isRefreshing = false;
  },
});

export default authSlice.reducer;
