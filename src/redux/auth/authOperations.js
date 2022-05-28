// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

// export const logInUser = createAsyncThunk(
//   'item/fetchLogInUser',
//   async (item, { rejectWithValue }) => {
//     try {
//       const postItem = {
//         email: item.email,
//         password: item.password,
//       };
//       const { data } = await axios.post('/users/login', postItem);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const logOutUser = createAsyncThunk(
//   'item/fetchLogOutUser',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout', contact);
//       token.unset();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addUser = createAsyncThunk(
//   'item/fetchAddUser',
//   async (item, { rejectWithValue }) => {
//     try {
//       const positItem = {
//         name: item.name,
//         email: item.imail,
//         password: item.password,
//       };
//       const { data } = await axios.post('/users/singup', postItem);
//       token.set(data.token);
//       alert(
//         `Привет, ${item.name}, ты вошел в аккаунт и теперь можешь воспользоваться контактами.`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchItem = createAsyncThunk(
//   'item/fetchItem',
//   async (_, { rejectWithValue }) => {
//     try {
//       const items = await axios.get('/contacts');
//       return items.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addItem = createAsyncThunk(
//   'item/fetchAddItem',
//   async (item, { rejectWithValue }) => {
//     try {
//       const postItem = {
//         name: item.name,
//         password: item.password,
//       };
//       const post = await axios.post('/contacts', postItem);
//       return post.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
