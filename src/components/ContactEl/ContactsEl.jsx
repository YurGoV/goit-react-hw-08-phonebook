import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from "redux/contactsOperations";
import {selectLoader} from "redux/selectors";
import Box from "@mui/material/Box";
import {Stack, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  contactsListStyles, deleteButtonStyles, editButtonStyles,
  elementBoxStyles, Item, closeButtonStyles,
  displayNameStyles, displayPhoneStyles,
} from "./ContactsEl.styled";
import PropTypes from "prop-types";
import {ContactsElForm} from "components/ContactsElForm/ContactsElForm";


export const ContactsEl = ({data}) => {
  const [isUnderEditing, setIsUnderEditing] = useState(false);
  const [editingContact, setEditingContact] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const colorOnLoading = isLoading ? 'lightgrey' : '';

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const onEdit = (id, name, number) => {//
    const contact = {id, name, number}

    setEditingContact(contact);
    setIsUnderEditing(!isUnderEditing);
  };

  const onClose = () => {
    setIsUnderEditing(false);
    setEditingContact({});
  };

  const onNewContactSaved = () => {/////
    setIsUnderEditing(false);
    setEditingContact({});
  }

  return (
    <Box sx={contactsListStyles}>
      <Stack spacing={2} sx={{width: '100%'}}>
        {data.map(contact => (
            <Item key={contact.id} sx={{color: colorOnLoading}}>
              {(editingContact.id === contact.id && isUnderEditing) ? (
                <Box sx={elementBoxStyles}
                >
                  <ContactsElForm
                    editingContact={editingContact}
                    onNewContactSaved={onNewContactSaved}>
                  </ContactsElForm>
                  <IconButton
                    onClick={() => onClose()} disabled={isLoading} sx={closeButtonStyles}>
                    <CloseOutlinedIcon/>
                  </IconButton>
                </Box>
              ) : (
                <Box sx={elementBoxStyles}
                >
                  <Typography sx={displayNameStyles}>
                    {contact.name}
                  </Typography>
                  <Typography sx={displayPhoneStyles}>
                    {contact.number}
                  </Typography>
                  <IconButton
                    onClick={() => onEdit(contact.id, contact.name, contact.number)}
                    disabled={isLoading} sx={editButtonStyles}>
                    <ModeEditOutlinedIcon/>
                  </IconButton>
                </Box>
              )}
              <IconButton onClick={() => onDelete(contact.id)} disabled={isLoading}
                          sx={deleteButtonStyles}><DeleteOutlinedIcon/></IconButton>
            </Item>
          )
        )}
      </Stack>
    </Box>
  );
};

ContactsEl.propTypes = {
  data: PropTypes.array,
};
