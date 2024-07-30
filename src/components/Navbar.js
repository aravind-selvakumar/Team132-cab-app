import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/ride-request');
    } else if (newValue === 2) {
      navigate('/account');
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      style={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: 'black' }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} style={{ color: 'white' }} />
      <BottomNavigationAction label="Request Ride" icon={<DirectionsCarIcon />} style={{ color: 'white' }} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} style={{ color: 'white' }} />
    </BottomNavigation>
  );
};

export default Navbar;
