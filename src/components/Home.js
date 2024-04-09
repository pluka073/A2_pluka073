import React, { useState } from 'react';
import HeaderApp from './HeaderApp';
import RaceTable from './RaceTable'; // Import the RaceTable component

const Home = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
    <HeaderApp onSelectYear={handleYearSelect} />

    <div className="container">
      <div className="column">
      <RaceTable selectedYear={selectedYear} />
      </div>
    </div>
    </div>
  );
};

export default Home;
