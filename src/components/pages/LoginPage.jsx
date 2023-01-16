import React from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {loginUser} from "redux/authOperations";
import {toast} from "react-toastify";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {authButtonStyle, authPagesStyles} from "./authPagesStyles";


const LoginPage = () => {
  const dispatch = useDispatch();
  const {register, resetField, handleSubmit} = useForm();//todo: validation

  const onFormSubmit = ({email = '', password = ''}) => {
    email = email.trim();
    if (!email || !password) {
      return toast('Please input  email and password');
    }

    const userData = {
      email,
      password,
    }

    resetField('password');
    resetField('email');

    dispatch(loginUser(userData))
  }

  return (
    <>
      <Box sx={{marginTop: '30px', marginBottom: '30px'}}>LOGIN FORM</Box>
      <Box component='form' onSubmit={handleSubmit(onFormSubmit)}
           noValidate autoComplete="on" sx={authPagesStyles}
      >
        <TextField {...register("email")} label="Email" variant="standard" size="small"/>
        <TextField {...register("password")} label="Password" variant="standard" size="small"/>
        <Button type="submit" variant="outlined" size="small" sx={authButtonStyle}>
          Add
        </Button>
      </Box>
    </>
  )

}

export default LoginPage;



