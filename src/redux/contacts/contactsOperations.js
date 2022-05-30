// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;
// export const allContacts = createAsyncThunk(
//   'contacts/allContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/api/v1/contacts?sortby=name');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         `/api/v1/contacts?sortby=name`,
//         contact
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// export const removeContact = createAsyncThunk(
//   'contacts/removeContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/api/v1/contacts/${id}`, id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;
export const allContacts = createAsyncThunk(
  'contacts/allContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`, contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
