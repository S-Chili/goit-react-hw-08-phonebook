import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignup, userLogin, userLogout, getContacts, addContact, deleteContact } from './operations';
import axios from 'axios';


export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const userSignupThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await userSignup();
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    } 
  } 
);

export const userLoginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await userLogin();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } 
  } 
);

export const userLogoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const data = await userLogout();
      unsetAuthHeader();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } 
  } 
);

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const data = await addContact(contact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const data = await deleteContact(id);
    return data;
  }
);