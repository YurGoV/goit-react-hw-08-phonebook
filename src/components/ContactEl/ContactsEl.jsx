import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from "redux/contactsOperations";
import {selectLoader} from "redux/selectors";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {contactsListStyles, deleteButtonStyles, Item} from "./ContactsEl.styled";


export const ContactsEl = ({data}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const colorOnLoading = isLoading ? 'lightgrey' : '';

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <Box sx={contactsListStyles}>
      <Stack spacing={2} sx={{width: '100%'}}>
        {data.map(contact => (
            <Item key={contact.id} sx={{color: colorOnLoading}}>
              <Typography>{contact.name}: {contact.phone}</Typography>
              <Button onClick={() => onDelete(contact.id)} disabled={isLoading} sx={deleteButtonStyles}>delete</Button>
            </Item>
          )
        )}
      </Stack>
    </Box>
  );
};

ContactsEl.propTypes = {
  data: PropTypes.array,
}



