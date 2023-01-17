import {createSelector} from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectLoader = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;


export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
  (contacts, filter) => {

    if (filter.length > 0) {
      return contacts.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return contacts;
  },
);
