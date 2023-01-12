import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ContactsEl} from "components/ContactEl/ContactsEl";
import {contactsStyles, titleStyles} from "./ContactsList.styled";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {toast} from "react-toastify";
import {fetchContacts} from "redux/contactsOperations";
import {selectFilteredContacts, selectError, selectLoader} from "redux/selectors";


export const ContactsList = () => {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast('Sorry! Something is wrong ((');
    }
  }, [error])


  // todo: refactor logic
  if (isLoading && filteredContacts.length === 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>
          Loading ....</Typography>
      </Box>
    );
  } else if (!isLoading && filteredContacts.length === 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>
          There are no contacts</Typography>
      </Box>
    );
  }

  if (filteredContacts.length > 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>Contacts</Typography>

        <ContactsEl data={filteredContacts}></ContactsEl>
      </Box>
    );
  }
};



