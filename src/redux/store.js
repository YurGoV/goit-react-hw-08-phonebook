import {configureStore} from '@reduxjs/toolkit';
import {contactsReducer} from "./contactsSlice";
import {filterSliceReducer} from "./filterSlice";
import {persistAuthReducer} from "./authSlice";
import {persistStore} from 'redux-persist';
import {
  FLUSH, REHYDRATE,
  PAUSE, PERSIST,
  PURGE, REGISTER,
} from 'redux-persist'


export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    contacts: contactsReducer,
    filter: filterSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


