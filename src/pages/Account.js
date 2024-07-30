// Account.js
import React from 'react';
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import MailIcon from '@mui/icons-material/Mail';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import safetyfirst from '../assets/images/safetyfirst.jpg';
import airporttravel from '../assets/images/airporttravel.jpg';

const Account = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', minHeight: '100vh', paddingBottom: '56px' }}>
      <Box sx={{ display: 'flex',  padding: 2 }}>
        
      <Box sx={{justifyContent: 'flex-end', alignItems: 'rigth'}}>
          <Avatar sx={{ bgcolor: 'grey', width: 56, height: 56, marginRight: 2}}>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        </Box>
        <Box>
          <Typography variant="h5">Aravind S</Typography>
          <Box sx={{ display: 'flex', alignItems: 'left' }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>4.58</Typography>
          </Box>
        </Box>
        
        
      </Box>
      
      <Divider sx={{ bgcolor: 'grey.700' }} />


      <Card style={{ border: '1px solid grey',marginBottom: '40px',objectFit: 'cover', margin: 10,  borderRadius: 20  }}>
        <CardMedia
          component="img"
          alt="Banner 1"
          height="140"
          image={safetyfirst}
        />
      </Card>

      <Card style={{ border: '1px solid grey',marginBottom: '40px',objectFit: 'cover', margin: 10,  borderRadius: 20  }}>
        <CardMedia
          component="img"
          alt="Banner 1"
          height="140"
          image={airporttravel}
        />
      </Card>

      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        
        <ListItem button component={Link} to="/rider-insurance">
          <ListItemIcon sx={{ color: 'white' }}>
            <UmbrellaIcon />
          </ListItemIcon>
          <ListItemText primary="Rider insurance" secondary="₹10L cover for ₹3/trip"
            sx={{ '& .MuiListItemText-secondary': { color: 'gray' } }} />
        </ListItem>
        
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Send a gift" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Account;
