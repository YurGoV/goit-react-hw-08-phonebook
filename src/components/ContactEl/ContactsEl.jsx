import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from "redux/contactsOperations";
import {selectLoader} from "redux/selectors";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {contactsListStyles, deleteButtonStyles, elementBoxStyles, elementDataStyles, Item} from "./ContactsEl.styled";
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
    console.log('close');
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
                <>
                  <ContactsElForm
                    editingContact={editingContact}
                    onNewContactSaved={onNewContactSaved}>
                  </ContactsElForm>
                  <Button
                    onClick={() => onClose()} disabled={isLoading} sx={deleteButtonStyles}>
                    close
                  </Button>
                </>
              ) : (
                <Box sx={elementBoxStyles}
                >
                  <Typography sx={elementDataStyles}>
                    {contact.name}: {contact.number}
                  </Typography>
                  <Button
                    onClick={() => onEdit(contact.id, contact.name, contact.number)}
                    disabled={isLoading} sx={deleteButtonStyles}>
                    edit
                  </Button>
                </Box>
              )}
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

