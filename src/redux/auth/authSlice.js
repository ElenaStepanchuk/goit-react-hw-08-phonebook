import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  // isLoading: false,
  // error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isLoading = false;
      // state.error = null;
    },
    // [createUser.pending]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.contacts = payload;
    // },
    // [createUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.isLoading = false;
      // state.error = null;
    },
    [logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [logInUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
});
export default authSlice.reducer;
