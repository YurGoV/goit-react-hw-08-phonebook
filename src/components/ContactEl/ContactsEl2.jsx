import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact, editContact} from "redux/contactsOperations";
import {selectLoader} from "redux/selectors";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {contactsListStyles, deleteButtonStyles, Item} from "./ContactsEl.styled";


// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {formStyles2, inputStyles2} from "../ContactForm/ContactForm.styled";
import TextField from "@mui/material/TextField";




export const ContactsEl2 = ({data}) => {
  const [isUnderEditing, setIsUnderEditing] = useState(false);
  const [editingContact, setEditingContact] = useState({});


  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const colorOnLoading = isLoading ? 'lightgrey' : '';

  useEffect(() => {
    console.log('UE');
    console.log(editingContact.id);
    console.log(editingContact.name);
    console.log(editingContact.number);
  }, [editingContact])

  const {register, reset, handleSubmit} = useForm();//todo: validation
  const onSave = ({newName = '', newNumber = ''}) => {
    newName = newName.trim();
    newNumber = newNumber.trim();
    if (!newName || !newNumber) {
      return toast('Please input name & phone number of Contact');
    }

    // const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    // if (isAlreadyInContacts) {
    //   return toast(`${name} is already in contacts`);
    // }


    const newContactData = {
      id: editingContact.id,
      contact: {
        name: newName,
        number: newNumber,
      }
    }
    console.log(newContactData);

    dispatch(editContact(newContactData))

    // resetField('name');
    // resetField('number');

  };

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  }

  const onEdit = (id, name, number) => {
    // const editedName = name;
    const contact = {id, name, number}

    reset({
      name: name,
      number: number,
    })

    setEditingContact(contact);
    setIsUnderEditing(!isUnderEditing);
  }

  const onClose = () => {
    console.log('close');
    setIsUnderEditing(false);
    setEditingContact({});
    // resetField('name');
    // resetField('number');
  }

  // const onSave = (id) => {
  //   setIsUnderEditing(!isUnderEditing);
  //   setEditing(id);
  // }

  return (
    <Box sx={contactsListStyles}>
      <Stack spacing={2} sx={{width: '100%'}}>
        {data.map(contact => (

          <Item key={contact.id} sx={{color: colorOnLoading}}>
            {/*{editingID === contact.id ? (<box>dd</box>) : (<box>ff</box>)}*/}
            {(editingContact.id === contact.id && isUnderEditing) ? (
            <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onSave)} disabled={true} sx={formStyles2}
            >
              <Box sx={{display: 'flex', flexDirection: 'row', minWidth: '250px'}}>
              <TextField {...register("newName")}
                // sx={{backgroundColor: 'black'}}
                // disabled {color: black}
                         defaultValue={editingContact.name}
                         disabled={!(editingContact.id === contact.id && isUnderEditing)}
                         variant="standard" size="small" sx={inputStyles2}/>
              <TextField {...register("newNumber")}
                         defaultValue={editingContact.number}
                         disabled={!(editingContact.id === contact.id && isUnderEditing)}
                         variant="standard" size="small"
                         sx={inputStyles2}/>
              </Box>

              <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
              <Button type='submit' disabled={isLoading} sx={deleteButtonStyles}>save</Button>
              <Button onClick={() => onClose()} disabled={isLoading} sx={deleteButtonStyles}>close</Button>
              </Box>

            </Box>
              ) : (
              <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onSave)} disabled={true} sx={formStyles2}
              >
              {/*<Item key={contact.id} sx={{color: colorOnLoading}}>*/}
                <Typography sx={{display: 'flex', minWidth: '250px', textJustify: 'left'}}>{contact.name}: {contact.number}</Typography>
                <Button onClick={() => onEdit(contact.id, contact.name, contact.number)} disabled={isLoading} sx={deleteButtonStyles}>edit</Button>
              {/*</Item>*/}
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

ContactsEl2.propTypes = {
  data: PropTypes.array,
}


// {editingID === contact.id ? (<box>dd</box>) : (<box>ff</box>)}

/*
<Accordion key={contact.id}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Box sx={{display: 'flex', width: '342px', height: '35px', border: '1px solid tomato'}}>
      <Typography>A{contact.name}: {contact.number}</Typography>

    </Box>
  </AccordionSummary>
  <AccordionDetails>
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
      <Button onClick={() => onEdit(contact.id)} disabled={isLoading} sx={deleteButtonStyles}>edit</Button>
      <Button onClick={() => onDelete(contact.id)} disabled={isLoading}
              sx={deleteButtonStyles}>delete</Button>
    </Box>
  </AccordionDetails>
</Accordion>
*/

/*

<Accordion key={contact.id}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    {editingID === contact.id ? (<box>dd</box>) : (<box>ff</box>)}
    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onFormSubmit)} sx={formStyles2}
    >
      <TextField {...register("name")} label="Name" variant="standard" size="small" sx={inputStyles2}/>
      <TextField {...register("number")} label="Number" variant="standard" size="small"/>


      <Button type="submit" variant="outlined" size="small" disabled={isLoading} sx={buttonStyle}>
        Add
      </Button>

    </Box>
  </AccordionSummary>
  <AccordionDetails>
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
      <Button onClick={() => onEdit(contact.id)} disabled={isLoading} sx={deleteButtonStyles}>edit</Button>
      <Button onClick={() => onDelete(contact.id)} disabled={isLoading}
              sx={deleteButtonStyles}>delete</Button>
    </Box>
  </AccordionDetails>
</Accordion>
*/






