import * as React from 'react';
import UserMenu from "components/UserMenu/UserMenu";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {HomeLinkStyled, isLoggedInStyles, RegisterButtonStyled} from "./Navigation.styled";
import {useAuth} from "../hooks/useAuth";


export default function ButtonAppBar() {

  const {isLoggedIn} = useAuth();
  console.log(isLoggedIn);

  return (
    <Box sx={{flexGrow: 1}}>

      <AppBar position="static" sx={{display: 'flex', alignItems: 'center', minWidth: '100wh'}}>
        <Box minWidth='800px'>
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <HomeLinkStyled to={'/'}>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                PHONE BOOK
              </Typography> </HomeLinkStyled>

            {!isLoggedIn ? (
              <Box>
                <RegisterButtonStyled to={'/login'}>
                  LOGIN
                </RegisterButtonStyled>
                <RegisterButtonStyled to={'/register'}>
                  SIGNUP
                </RegisterButtonStyled> </Box>
            ) : (<Box sx={isLoggedInStyles}>
                <HomeLinkStyled to={'/contacts'}>
                  <Typography>
                    CONTACTS
                  </Typography> </HomeLinkStyled>
                <UserMenu></UserMenu>
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
