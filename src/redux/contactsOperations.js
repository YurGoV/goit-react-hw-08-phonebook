import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContacts, delContact, postContact, signupUser, setAuthHeader, logout} from "services/contacts-api";


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      const response = await delContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, {rejectWithValue}) => {
    try {
      const response = await postContact(contactData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await signupUser(userData);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      console.log('looooout');
      const response = await logout();
      console.log(response);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
