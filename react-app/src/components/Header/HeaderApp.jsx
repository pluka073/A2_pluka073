import { useState } from 'react';
import SeasonSelect from './SeasonSelect.jsx';
import HeaderBar from './HeaderBar.jsx';
import HeaderMenu from './HeaderMenu.jsx';

const HeaderApp = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    props.onSelectYear(year); 
  };
  
  return ( 
    <header className="header">
      <SeasonSelect selectedSeason={selectedYear} onSelectYear={handleYearSelect} /> 
      <HeaderBar /> 
      <HeaderMenu /> 
    </header> 
  ); 
}

export default HeaderApp;
