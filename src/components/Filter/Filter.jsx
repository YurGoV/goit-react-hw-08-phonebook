import React from "react";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filterSlice";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {filterStyles} from "./Filter.styled";


export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  }

  return (
    <Box sx={filterStyles}>
      <TextField onChange={handleSearch} label="Search" size="small"/>
    </Box>
  )
};



