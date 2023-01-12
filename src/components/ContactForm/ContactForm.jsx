import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {addContact} from "redux/contactsOperations";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {buttonStyle, formStyles} from "./ContactForm.styled";
import {selectContacts, selectLoader} from "redux/selectors";


export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const {register, resetField, handleSubmit} = useForm();//todo: validation
  const dispatch = useDispatch();

  const onFormSubmit = ({name = '', phone = ''}) => {
    name = name.trim();
    phone = phone.trim();
    if (!name || !phone) {
      return toast('Please input name & phone number of Contact');
    }

    const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    if (isAlreadyInContacts) {
      return toast(`${name} is already in contacts`);
    }

    const contactData = {
      name,
      phone,
    }

    dispatch(addContact(contactData))

    resetField('name');
    resetField('phone');
  };


  //todo: no loader in 1st start with empty contacts
  return (

    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onFormSubmit)} sx={formStyles}
    >
      <TextField {...register("name")} label="Name" variant="standard" size="small"/>
      <TextField {...register("phone")} label="Number" variant="standard" size="small"/>


      <Button type="submit" variant="outlined" size="small" disabled={isLoading} sx={buttonStyle}>
        Add
      </Button>

    </Box>
  );
};




