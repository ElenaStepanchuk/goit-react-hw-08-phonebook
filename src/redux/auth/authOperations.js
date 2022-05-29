import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = `https://connections-api.herokuapp.com/`;
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/login`, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
