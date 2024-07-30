import React from 'react';
import { Box, Card, CardContent, Typography, TextField, IconButton, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventIcon from '@mui/icons-material/Event';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', minHeight: '100vh', paddingBottom: '56px', padding: 2 }}>
      {/* Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Where to?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: 'white' }}>
                  <AccessTimeIcon />
                  Now
                </IconButton>
              </InputAdornment>
            ),
            sx: { color: 'white', bgcolor: 'grey.800', borderRadius: 1 }
          }}
        />
      </Box>
      
      {/* Recent Locations */}
      <List sx={{ bgcolor: 'grey.900', borderRadius: 1, marginBottom: 2 }}>
        <ListItem>
          <ListItemIcon sx={{ color: 'white' }}>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Piccadilly Circus" secondary="Piccadilly Circus, London W1J 9HS England" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: 'white' }}>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Natural History Museum" secondary="Cromwell Rd, South Kensington, London SW7 5BD, United Kingdom" />
        </ListItem>
      </List>

      {/* Payment Reminder */}
      <Card sx={{ bgcolor: 'grey.800', borderRadius: 1, marginBottom: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PaymentIcon sx={{ color: 'yellow', fontSize: 40 }} />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6">Finalize payment:</Typography>
              <Typography variant="h5">£170.71</Typography>
              <Button variant="contained" color="primary">Pay</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Suggestions */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>Suggestions</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button>
            <Avatar sx={{ bgcolor: 'green', marginBottom: 1 }}>
              <LocalOfferIcon />
            </Avatar>
            <Typography>Promo Ride</Typography>
          </Button>
          <Button>
            <Avatar sx={{ bgcolor: 'orange', marginBottom: 1 }}>
              <LocalShippingIcon />
            </Avatar>
            <Typography>Package</Typography>
          </Button>
          <Button>
            <Avatar sx={{ bgcolor: 'green', marginBottom: 1 }}>
              <DriveEtaIcon />
            </Avatar>
            <Typography>Rentals</Typography>
          </Button>
          <Button>
            <Avatar sx={{ bgcolor: 'red', marginBottom: 1 }}>
              <EventIcon />
            </Avatar>
            <Typography>Reserve</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
