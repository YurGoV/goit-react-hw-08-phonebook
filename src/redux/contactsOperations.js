import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContacts, delContact, postContact} from "services/contacts-api";


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
