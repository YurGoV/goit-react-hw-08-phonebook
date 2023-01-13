import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {toast} from "react-toastify";


import Box from "@mui/material/Box";
// import {addContact} from "../../redux/contactsOperations";
// import {buttonStyle, formStyles} from "../ContactForm/ContactForm.styled";
import React from "react";
import {loginUser} from "../../redux/authOperations";
import {registerButtonStyle, registerFormStyles} from "../RegisterForm/RegisterFormStyles";


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
      <Box component='form' noValidate autoComplete="on" sx={registerFormStyles} onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextField {...register("email")} label="Email" variant="standard" size="small"/>
        <TextField {...register("password")} label="Password" variant="standard" size="small"/>



        <Button type="submit" variant="outlined" size="small" sx={registerButtonStyle}>
          Add
        </Button>

      </Box>
    </>
  )

}

export default LoginPage;



