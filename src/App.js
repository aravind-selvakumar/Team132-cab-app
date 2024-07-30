import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RideRequest from './pages/RideRequest';
import Account from './pages/Account';
import RiderInsurance from './pages/RiderInsurance';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ride-request" element={<RideRequest />} />
          <Route path="/account" element={<Account />} />
          <Route path="/rider-insurance" element={<RiderInsurance/>} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
