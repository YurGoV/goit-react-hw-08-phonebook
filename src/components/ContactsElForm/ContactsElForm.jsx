import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {editContact} from "redux/contactsOperations";
import React from "react";
import {useDispatch} from "react-redux";
import {
  formStyles, inputBoxStyles, inputNameStyles,
  inputPhoneStyles, saveButtonStyles
} from "./ContactsElForm.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import PropTypes from "prop-types";


export const ContactsElForm = ({editingContact, onNewContactSaved}) => {

  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();

  const onSave = ({newName = '', newNumber = ''}) => {
    newName = newName.trim();
    newNumber = newNumber.trim();
    if (!newName || !newNumber) {
      return toast('Please input name & phone number of Contact');
    }

    const isNotChangedContact = newName === editingContact.name && newNumber === editingContact.number;
    if (isNotChangedContact) {
      return toast(`you not change contact data`);
    }

    const newContactData = {
      id: editingContact.id,
      contact: {
        name: newName,
        number: newNumber,
      }
    }

    dispatch(editContact(newContactData))
    onNewContactSaved();
  };

  return (
    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onSave)} disabled={true}
         sx={formStyles}
    >
      <Box sx={inputBoxStyles}>
        <TextField {...register("newName")}
                   defaultValue={editingContact.name}
                   fullWidth
                   multiline
                   maxRows={4}
                   variant="standard" size="small" sx={inputNameStyles}/>
        <TextField {...register("newNumber")}
                   defaultValue={editingContact.number}
                   variant="standard" size="small"
                   sx={inputPhoneStyles}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
        <IconButton type='submit' sx={saveButtonStyles}><SaveOutlinedIcon/></IconButton>
      </Box>
    </Box>
  )
};

ContactsElForm.propTypes = {
  editingContact: PropTypes.object,
  onNewContactSaved: PropTypes.func,
};
