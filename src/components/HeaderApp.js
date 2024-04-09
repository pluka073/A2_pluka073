import React, { useState } from 'react';
import SeasonSelect from './SeasonSelect.js';
import HeaderBar from './HeaderBar';
import HeaderMenu from './HeaderMenu';
const HeaderApp = ({ onSelectYear }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    onSelectYear(year); 
  };
  
  return ( 
    <header className="header"> 
      <SeasonSelect selectedSeason={selectedYear} onSelectYear={handleYearSelect} />
      {selectedYear}
      <HeaderBar /> 
      <HeaderMenu /> 
    </header> 
    
  ); 
} 

export default HeaderApp;
