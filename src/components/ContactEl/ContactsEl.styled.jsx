import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';


export const contactsListStyles = {
  display: 'flex',
  flexDirection: 'row',
  minWidth: '100%',
};

export const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export const elementBoxStyles = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  minWidth: '500px',
  minHeight: '30px',
  maxWidth: '500px',
  justifyContent: 'space-between',
  // textJustify: 'center',
}

export const deleteButtonStyles = {
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'lightgrey',

  "&:hover": {
    color: 'red',
  }
};

export const editButtonStyles = {
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'lightgrey',

  "&:hover": {
    color: 'lightgreen',
  }
};

export const displayPhoneStyles = {

  display: 'flex',
  fontSize: '16px',
  width: '150px',
  textAlign: 'start',
  alignItems: 'center',
  // "& .MuiInputBase-input.Mui-disabled": {
  //   WebkitTextFillColor: "black",
  // }
};

export const displayNameStyles = {
  display: 'flex',
  fontSize: '16px',
  width: '350px',
  textAlign: 'start',
  alignItems: 'center',
  // "& .MuiInputBase-input.Mui-disabled": {
  //   WebkitTextFillColor: "black",
  // }
};

export const closeButtonStyles = {
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '12px',
  color: 'lightgrey',

  "&:hover": {
    color: 'black',
  }
};
