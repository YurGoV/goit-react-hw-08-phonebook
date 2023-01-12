import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import {hStyle} from "./App.styled";


export const App = () => {

  return (
    <Container maxWidth="sm">
      <Typography component='h1' sx={hStyle}>Phonebook</Typography>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <ContactsList></ContactsList>

      <ToastContainer autoClose={2000}
                      position="top-center"
                      theme="light"
                      transition={Zoom}
      />
    </Container>
  );
}

