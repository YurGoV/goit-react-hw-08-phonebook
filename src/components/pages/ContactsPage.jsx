import {ContactForm} from "../ContactForm/ContactForm";
import Box from "@mui/material/Box";
import {ContactsList} from "../ContactsList/ContactsList";
import {Filter} from "../Filter/Filter";

const ContactsPage = () => {
  return (
    <Box>
      <ContactForm/>
      <Filter/>
      <ContactsList/>
    </Box>
  )
};

export default ContactsPage;
