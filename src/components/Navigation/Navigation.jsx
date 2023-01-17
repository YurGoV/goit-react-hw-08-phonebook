import * as React from 'react';
import UserMenu from "components/UserMenu/UserMenu";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  appBarStyles,
  contactsStyles,
  HomeLinkStyled,
  isLoggedInStyles, isLoggedOutStyles,
  RegisterButtonStyled
} from "./Navigation.styled";
import {useAuth} from "../hooks/useAuth";


export default function ButtonAppBar() {

  const {isLoggedIn} = useAuth();

  return (
    <Box sx={{flexGrow: 1}}>

      <AppBar position="static" sx={appBarStyles}>
        <Box minWidth='900px'>
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <HomeLinkStyled to={'/'}>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                PHONE BOOK
              </Typography> </HomeLinkStyled>

            {!isLoggedIn ? (
              <Box sx={isLoggedOutStyles}>
                <RegisterButtonStyled to={'/login'}>
                  LOGIN
                </RegisterButtonStyled>
                <RegisterButtonStyled to={'/register'}>
                  SIGNUP
                </RegisterButtonStyled> </Box>
            ) : (<Box sx={isLoggedInStyles}>
                <HomeLinkStyled to={'/contacts'}>
                  <Typography sx={contactsStyles}>
                    CONTACTS
                  </Typography> </HomeLinkStyled>
                <UserMenu />
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};
