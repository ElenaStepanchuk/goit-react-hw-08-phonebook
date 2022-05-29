import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    // [createUser.pending]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.contacts = payload;
    // },
    // [createUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    // [logInUser.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.contacts.push(payload);
    // },
    // [logInUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
});
export default authSlice.reducer;
