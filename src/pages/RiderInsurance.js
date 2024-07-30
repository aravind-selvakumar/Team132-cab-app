// RiderInsurance.js
import React from 'react';
import { Box, Typography, Switch, FormControlLabel, Link as MuiLink } from '@mui/material';
import banner3 from '../assets/images/uberinsurance.jpg';

const RiderInsurance = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', minHeight: '100vh', padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 2,  color: 'black'}}>
        <MuiLink href="/" sx={{ color: 'black', textDecoration: 'none' }}>
          &lt; Insurance
        </MuiLink>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img src={banner3} alt="Rider Insurance" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Rider Insurance settings
      </Typography>

      <Box sx={{ bgcolor: 'grey.200', padding: 2, borderRadius: 2, marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
        
          
            <Box>
              <Typography variant="h6" align='left'>Cover my rides with Rider Insurance</Typography>
              <Typography variant="body2" color="textSecondary" align='left'>
                Turn on to get coverage for all future eligible rides. 
                By turning this on, I confirm I have read and agree to the{' '}
                <MuiLink href="#" underline="hover">exclusions, terms & conditions</MuiLink>.
              </Typography>
            </Box>
          
            <FormControlLabel control={<Switch />} />
     </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Things to know about Rider Insurance
      </Typography>
      <Typography variant="body1">
        With Reliance General Insurance, you can protect yourself and everyone riding with you with medical costs and more.
      </Typography>
    </Box>
  );
};

export default RiderInsurance;
