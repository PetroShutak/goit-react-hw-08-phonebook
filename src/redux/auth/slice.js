import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  [signUp.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [logIn.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logIn.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [logOut.fulfilled]: (state, action) => {
    state.user = { name: null, email: null, password: null };
    state.token = null;
    state.isLoggedIn = false;
  },
  [logOut.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [fetchCurrentUser.pending]: (state, action) => {
    state.isFetchingCurrentUser = true;
  },
  [fetchCurrentUser.fulfilled]: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isFetchingCurrentUser = false;
  },
  [fetchCurrentUser.rejected]: (state, action) => {
    state.isFetchingCurrentUser = false;
  },
});

export default authSlice.reducer;
