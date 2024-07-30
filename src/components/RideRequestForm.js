import React, { useState } from 'react';
import { TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const RideRequestForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [response, setResponse] = useState(null);

  //Randon trip ID generator

  const generateTripId = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    return `Uber${randomNumber}`;
  };

  const handleRequestRide = async (e) => {
    e.preventDefault();

    const policyData = {
      tripId: generateTripId(),
      customerName: 'John Doe', 
      customerEmail: 'john.doe@example.com' 
    };

    try {
      const response = await axios.post('http://localhost:5083/api/Policies/create', policyData);
      setResponse({
        status: response.status,
        data: response.data
      });
    } catch (error) {
      console.error('Error creating policy:', error);
      setResponse({
        status: error.response ? error.response.status : 'Network Error',
        data: error.response ? error.response.data : {}
      });
    }
  };

  return (
    <>
      <form onSubmit={handleRequestRide}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Pick-up Location"
              variant="outlined"
              fullWidth
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Drop-off Location"
              variant="outlined"
              fullWidth
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Request Ride
            </Button>
          </Grid>
        </Grid>
      </form>

      {response && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Status Code</TableCell>
                <TableCell>{response.status}</TableCell>
              </TableRow>
              {Object.entries(response.data).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default RideRequestForm;
