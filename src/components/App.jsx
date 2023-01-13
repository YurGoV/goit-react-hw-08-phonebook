import { Routes, Route } from "react-router-dom";


import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {Filter} from "./Filter/Filter";
// import {ContactsList} from "./ContactsList/ContactsList";
// import {ContactForm} from "./ContactForm/ContactForm";
import Container from '@mui/material/Container';
// import {Typography} from "@mui/material";
// import {hStyle} from "./App.styled";
import Navigation from "./Navigation/Navigation";
import RegisterForm from "./RegisterForm/RegisterForm";
import {Contacts} from "@mui/icons-material";
import WelcomePage from "./pages/WellcomePage";


export const App = () => {

  return (
    <>
      <Navigation />
    <Container maxWidth="sm">
      {/*<Typography component='h1' sx={hStyle}>Phonebook</Typography>*/}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/contacts' element={<Contacts /> } />
        {/*<Filter></Filter> <ContactForm />*/}
        {/*<ContactsList></ContactsList>*/}
      </Routes>

      <ToastContainer autoClose={2000}
                      position="top-center"
                      theme="light"
                      transition={Zoom}
      />
    </Container>
    </>
  );
}

