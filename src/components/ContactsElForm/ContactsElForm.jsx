import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {editContact} from "redux/contactsOperations";
import React from "react";
import {useDispatch} from "react-redux";
import {formStyles, inputStyles} from "./ContactsElForm.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {deleteButtonStyles} from "components/ContactEl/ContactsEl.styled";


export const ContactsElForm = ({editingContact, onNewContactSaved}) => {

  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();//todo: validation

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
      <Box sx={{display: 'flex', flexDirection: 'row', minWidth: '250px'}}>
        <TextField {...register("newName")}
                   defaultValue={editingContact.name}
                   variant="standard" size="small" sx={inputStyles}/>
        <TextField {...register("newNumber")}
                   defaultValue={editingContact.number}
                   variant="standard" size="small"
                   sx={inputStyles}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
        <Button type='submit' sx={deleteButtonStyles}>save</Button>
      </Box>
    </Box>
  )


}
