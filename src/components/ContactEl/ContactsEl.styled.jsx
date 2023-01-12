import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';


export const contactsListStyles = {
  display: 'flex',
  flexDirection: 'row',
  minWidth: '100%',
}

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

export const deleteButtonStyles = {
  backgroundColor: 'white',
  display: 'flex',
  height: '25px',
  width: '45px',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '3px',
  fontSize: '12px',
  color: 'lightgrey',

  "&:hover": {
    border: '1px solid lightcoral',
    color: 'black',
  }
};
