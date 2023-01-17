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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const {register, resetField, handleSubmit} = useForm();//todo: validation
  const dispatch = useDispatch();

  const onFormSubmit = ({name = '', number = ''}) => {
    name = name.trim();
    number = number.trim();
    if (!name || !number) {
      return toast('Please input name & phone number of Contact');
    }

    const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    if (isAlreadyInContacts) {
      return toast(`${name} is already in contacts`);
    }

    const contactData = {
      name,
      number,
    }

    dispatch(addContact(contactData));

    resetField('name');
    resetField('number');
  };

  return (
    <Box sx={{maxWidth: '400px'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ADD CONTACT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component='form'
               onSubmit={handleSubmit(onFormSubmit)} noValidate autoComplete="on" sx={formStyles}
          >
            <TextField {...register("name")} label="Name" variant="standard" size="small"/>
            <TextField {...register("number")} label="Number" variant="standard" size="small"/>
            <Button type="submit" variant="outlined" size="small" disabled={isLoading} sx={buttonStyle}>
              Add
            </Button>

          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};




