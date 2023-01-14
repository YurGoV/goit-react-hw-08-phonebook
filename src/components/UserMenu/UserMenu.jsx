import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../redux/selectors";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import * as React from "react";
import {logoutUser} from "../../redux/authOperations";



const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUser).email;
  const logout = () => {
    console.log('lllll');
    dispatch(logoutUser());
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Typography sx={{marginTop: 'auto', marginBottom: 'auto', paddingRight: '15px'}}>
        Welcome, {userEmail}!
      </Typography>
      <Box>
        <Button onClick={() => logout()} color="inherit"><LogoutIcon /></Button>

      </Box>
    </Box>
  )
}

export default UserMenu;
