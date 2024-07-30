import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Card, CardMedia, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';

const Profile = () => {
  return (
    <div>
      <h1>Your Profile</h1>
      
      <Card style={{ marginBottom: '20px' }}>
        <CardMedia
          component="img"
          alt="Banner 1"
          height="140"
          image={banner1}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to Your Profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your settings and preferences.
          </Typography>
        </CardContent>
      </Card>
      
      <Card style={{ marginBottom: '20px' }}>
        <CardMedia
          component="img"
          alt="Banner 2"
          height="140"
          image={banner2}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Explore More Features
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover new settings and options to personalize your experience.
          </Typography>
        </CardContent>
      </Card>

      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="View Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Profile;
