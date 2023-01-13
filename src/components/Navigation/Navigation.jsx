import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {HomeLinkStyled, RegisterButtonStyled} from "./Navigation.styled";
// import {NavLink} from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {selectIsLoggedIn} from "../../redux/selectors";
import {logoutUser} from "../../redux/contactsOperations";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../../redux/selectors";

export default function ButtonAppBar() {

  const isLogged = useSelector(selectIsLogged);
  console.log(isLogged);

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" sx={{display: 'flex', alignItems: 'center', minWidth: '100wh'}}>
        <Box minWidth='600px' >
        <Toolbar sx={{justifyContent: 'space-between'}}>
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>*/}
            <HomeLinkStyled to={'/'} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PHONE BOOK
          </Typography> </HomeLinkStyled>

          {!isLogged ?
            <>
            <Button color="inherit">Login</Button>
            <RegisterButtonStyled to={'/register'}>
            SIGNUP </RegisterButtonStyled> </>
            : <div>USER MENU
              <Button color="inherit" onSubmit={logoutUser}>LogOut</Button>
            </div>
          }

        </Toolbar>
        </Box>
      </AppBar>

    </Box>
  );
}
