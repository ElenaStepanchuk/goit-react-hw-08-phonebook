// import { createSlice } from '@reduxjs/toolkit';
// const contactSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { email: null, password: null, name: null },
//     token: null,
//     login: false,
//     isFetchingCarrentUser: false,
//   },
//   extraReducers: {
//     [addUser.fulfilled]: (state, { payload }) => {
//       state.user.email = payload.user.email;
//       state.user.name = payload.user.name;
//       state.token = payload.token;
//       state.login = true;
//     },
//     [addUser.rejected]: state => {
//       alert('Что-то пошло не так, повторите');
//       state.login = false;
//     },
//     [logOutUser.fulfilled]: state => {
//       state.user.email = null;
//       state.user.name = null;
//       state.token = null;
//       state.login = false;
//     },
//     [logInUser.pending]: (state, { payload }) => {
//       state.user.email = payload.user.email;
//       state.user.name = payload.user.name;
//       state.token = payload.token;
//       state.login = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [logInUser.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//     [logInUser.rejected]: state => {
//       alert('Что-то пошло не так, повторите');
//       state.login = false;
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });
