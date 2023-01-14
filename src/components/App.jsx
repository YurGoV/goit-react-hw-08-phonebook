import {Routes, Route} from "react-router-dom";


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
// import {ContactsPage} from "@mui/icons-material";
import WelcomePage from "./pages/WellcomePage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {refreshUser} from "../redux/authOperations";
import {selectIsRefreshing} from "../redux/selectors";


export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  console.log(isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? ('asking for user data...')
    : (
      <>
        <Navigation/>
        <Container maxWidth="sm">
          {/*<Typography component='h1' sx={hStyle}>Phonebook</Typography>*/}
          <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
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

