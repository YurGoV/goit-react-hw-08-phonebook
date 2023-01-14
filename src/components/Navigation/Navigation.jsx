import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import {HomeLinkStyled, RegisterButtonStyled} from "./Navigation.styled";
// import {NavLink} from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {selectIsLoggedIn} from "../../redux/selectors";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../../redux/selectors";
// import {logoutUser} from "../../redux/authOperations";
import UserMenu from "../UserMenu/UserMenu";

export default function ButtonAppBar() {
  // const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLogged);
  console.log(isLogged);


   return (
    <Box sx={{flexGrow: 1}}>

      <AppBar position="static" sx={{display: 'flex', alignItems: 'center', minWidth: '100wh'}}>
        <Box minWidth='800px'>
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
            <HomeLinkStyled to={'/'}>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                PHONE BOOK
              </Typography> </HomeLinkStyled>

            {!isLogged ?
              <Box >
                <RegisterButtonStyled to={'/login'}>
                  LOGIN
                </RegisterButtonStyled> {/*<Button onClick={() => logout()} color="inherit" >LogOut</Button>*/}
                <RegisterButtonStyled to={'/register'}>
                  SIGNUP
                </RegisterButtonStyled> </Box>
              : <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%'}}>

                <HomeLinkStyled to={'/contacts'}>
                  <Typography  >
                    CONTACTS
                  </Typography> </HomeLinkStyled>

                <UserMenu></UserMenu>
              </Box>
            }

          </Toolbar>
        </Box>
      </AppBar>

    </Box>
  );
}
