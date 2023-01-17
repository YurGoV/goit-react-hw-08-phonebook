import {styled} from "@mui/material/styles";
import {NavLink} from "react-router-dom";


export const appBarStyles = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '100wh'
}

export const RegisterButtonStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const HomeLinkStyled = styled(NavLink)`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  color: white;
  text-decoration: none;
`;

export const isLoggedInStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '70%',
};

export const isLoggedOutStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '150px',
};

export const contactsStyles = {

  "&:hover": {
    fontWeight: 'bold',
  }
}
