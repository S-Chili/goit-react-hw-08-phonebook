import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://pixabay.com/get/g28e1b078a4614b87e1161f26cead0945636ee1ea0a4f67fe882e0667d7caf5c3dcd7fca528bcaf23c9b9dba06c222d4f9e442b500df305982765ef95d41a137a_1280.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        PhoneBook
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Take advantage of the excellent opportunity - to have a 
        place where you can store all your contacts - without 
        losing them, a place - which will not take up a single MB 
        in your device's memory. SAFETY and QUALITY are our main 
        indicators. Сlick on the symbol <HowToRegTwoToneIcon/> for quick registration, 
        or on the symbol <LoginTwoToneIcon/> for logging into the account. 
        Pleasant use!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
