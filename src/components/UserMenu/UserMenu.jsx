import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import * as React from "react";
import {logoutUser} from "../../redux/authOperations";
import {useAuth} from "../hooks/useAuth";


const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  const email = user.email;

  const logout = () => {
    dispatch(logoutUser());
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Typography sx={{marginTop: 'auto', marginBottom: 'auto', paddingRight: '15px'}}>
        Welcome, {email}
      </Typography>
      <Box>
        <Button onClick={() => logout()} color="inherit"><LogoutIcon/></Button>
      </Box>
    </Box>
  )
}

export default UserMenu;
