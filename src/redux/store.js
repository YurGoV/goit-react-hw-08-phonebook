import {configureStore} from '@reduxjs/toolkit';
import {contactsReducer} from "./contactsSlice";
import {filterSliceReducer} from "./filterSlice";
import {authReducer} from "./authSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterSliceReducer,
  },
});

