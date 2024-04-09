import { useState } from 'react';
import HeaderApp from '../Header/HeaderApp';
import RaceTable from '../RaceTable'; // Import the RaceTable component

const Home = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className='app-container'>
      <HeaderApp onSelectYear={handleYearSelect} />

      <div className="main-content">
        <div className="column">
          <RaceTable selectedYear={selectedYear} />
        </div>
      </div>
    </div>
  );
};

export default Home;
