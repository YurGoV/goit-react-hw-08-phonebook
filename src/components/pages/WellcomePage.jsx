import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const WelcomePage = () => {

  return (
    <Box sx={{marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography component='h1'>WELCOME!</Typography>
      <Typography component='p'>This is the react homework</Typography>
      <Typography>Let`s test this out )</Typography>
    </Box>
  )
};

export default WelcomePage;
