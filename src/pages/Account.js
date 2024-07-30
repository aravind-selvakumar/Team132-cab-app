// Account.js
import React from 'react';
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Card, CardContent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import MailIcon from '@mui/icons-material/Mail';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', minHeight: '100vh', paddingBottom: '56px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
        <Avatar sx={{ bgcolor: 'grey', width: 56, height: 56, marginRight: 2 }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Box>
          <Typography variant="h5">Aravind S</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>4.58</Typography>
          </Box>
        </Box>
      </Box>
      
      <Divider sx={{ bgcolor: 'grey.700' }} />

      <Card sx={{ bgcolor: 'grey.600', margin: 2 }}>
        <CardContent>
          <Typography variant="h6">Safety check-up</Typography>
          <Typography variant="body2">Learn ways to make trips safer.</Typography>
        </CardContent>
      </Card>

      <Card sx={{ bgcolor: 'grey.600', margin: 2 }}>
        <CardContent>
          <Typography variant="h6">Privacy check-up</Typography>
          <Typography variant="body2">Take an interactive tour of your privacy settings.</Typography>
        </CardContent>
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
