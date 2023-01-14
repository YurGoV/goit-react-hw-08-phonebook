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
import {RestrictedRoute} from "./RestrictedRoute";
import {PrivateRoute} from "./PrivatRoute";


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
        <Container maxWidth="sm" sx={{marginTop: '30px'}}>
          {/*<Typography component='h1' sx={hStyle}>Phonebook</Typography>*/}
          <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/register'
                   element={
                     <RestrictedRoute component={RegisterForm} redirectTo='/contacts'/>
                   }
            />
            <Route path='/login'
                   element={
                     <RestrictedRoute component={LoginPage} redirectTo='/contacts'/>
                   }
            />
            <Route path='/contacts'
                   element={
                     <PrivateRoute component={ContactsPage} redirectTo='/login'/>
                   }
            />
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

