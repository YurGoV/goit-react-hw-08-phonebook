import Box from "@mui/material/Box";
import {ContactForm} from "../ContactForm/ContactForm";
import {Filter} from "../Filter/Filter";
import {ContactsList} from "../ContactsList/ContactsList";


const Contacts = (props) => {
  return (
    <Box>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Box>
  )
}
