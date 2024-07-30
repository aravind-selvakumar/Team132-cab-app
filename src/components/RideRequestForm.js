import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const RideRequestForm = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Pick-up Location"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Drop-off Location"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Request Ride
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RideRequestForm;
