import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imageSrc from '../image/1654090338_26-celes-club-p-oboi-na-noutbuk-mramor-krasivie-28.jpg'

const Home = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="mramor"
        height="140"
        image={imageSrc}
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
