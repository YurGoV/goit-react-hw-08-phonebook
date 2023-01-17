import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import WelcomePage from "./pages/WellcomePage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./Navigation/Navigation";
import RegisterPage from "./pages/RegisterPage";
import {refreshUser} from "../redux/authOperations";
import {RestrictedRoute} from "./RestrictedRoute";
import {PrivateRoute} from "./PrivateRoute";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import {useAuth} from "./hooks/useAuth";


export const App = () => {
  const {isRefreshing} = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (

    <>
      <Navigation/>
      <Container maxWidth="md" sx={{marginTop: '30px'}}>

        {isRefreshing ? ('asking for user data...')
          : (
            <Routes>
              <Route path='/' element={<WelcomePage/>}/>
              <Route path='/register'
                     element={
                       <RestrictedRoute component={RegisterPage} redirectTo='/contacts'/>
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
          )}
        <ToastContainer autoClose={2000}
                        position="top-center"
                        theme="light"
                        transition={Zoom}
        />
      </Container>
    </>
  );
};
