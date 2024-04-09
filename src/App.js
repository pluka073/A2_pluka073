import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import HeaderApp from './components/HeaderApp';
import FavoriteView from './components/FavoriteView';
 // Import the RaceTable component

function App() {
  return (
    <main>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

// Define Seasons component to handle SeasonSelect and RaceTable together


export default App;
