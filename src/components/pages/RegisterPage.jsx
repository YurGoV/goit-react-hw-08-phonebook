import React from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {registerUser} from "redux/authOperations";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {toast} from "react-toastify";
import {registerButtonStyle, registerPageStyles} from "./RegisterPageStyles";


const RegisterPage = () => {
  const dispatch = useDispatch();
  const {register, resetField, handleSubmit} = useForm();//todo: validation

  const onFormSubmit = ({name = '', email = '', password = ''}) => {
    name = name.trim();
    email = email.trim();
    if (!name || !email || !password) {
      return toast('Please input name & phone number of Contact');
    }

    const userData = {
      name,
      email,
      password,
    }

    resetField('name');
    resetField('email');
    resetField('password');

    dispatch(registerUser(userData))
  }

  return (
    <>
      <Box sx={{marginTop: '30px', marginBottom: '30px'}}>REGISTER FORM</Box>
      <Box component='form' noValidate autoComplete="on" sx={registerPageStyles} onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextField {...register("name")} label="Name" variant="standard" size="small"/>
        <TextField {...register("email")} label="Email" variant="standard" size="small"/>
        <TextField {...register("password")} label="Password" variant="standard" size="small"/>

        <Button type="submit" variant="outlined" size="small" sx={registerButtonStyle}>
          Add
        </Button>
      </Box>
    </>
  )
};

export default RegisterPage;
