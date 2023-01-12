import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts, deleteContact, addContact} from "./contactsOperations";

//todo: https://www.edu.goit.global/uk/learn/5329046/31183/31258/textbook
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
 extraReducers: {
   [fetchContacts.pending](state) {
     state.isLoading = true;
   },
   [fetchContacts.fulfilled](state, action) {
     state.isLoading = false;
     state.error = null;
     state.contacts = action.payload;
   },
   [fetchContacts.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },

   [deleteContact.pending](state) {
     state.isLoading = true;
   },
   [deleteContact.fulfilled](state, action) {
     state.isLoading = false;
     state.error = null;
     state.contacts = state.contacts.filter(item => item.id !== action.payload);
   },
   [deleteContact.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },

   [addContact.pending](state) {
     state.isLoading = true;
   },
   [addContact.fulfilled](state, action) {
     state.isLoading = false;
     state.error = null;
     state.contacts = [action.payload, ...state.contacts];
   },
   [addContact.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },
 },
});

export const contactsReducer = contactsSlice.reducer;

