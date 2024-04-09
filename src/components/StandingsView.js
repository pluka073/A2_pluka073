import React, { useState } from 'react';
import DriverTable from './Standings/DriversTable'
import ConstructorsTable from './Standings/ConstructorsTable'

const StandingsView = ({selectedRace}) => {
  const [race, setSelectedRace] = useState(null);
  
    const handleRaceSelect = (race) => {
      setSelectedRace(race);
      
    };
    return (
      <div className="container">
      <div className='column'>
        <DriverTable selectedRace={selectedRace} />
        </div>
        <div className='column'>
        <ConstructorsTable selectedRace={selectedRace} />
      </div>
      </div>
      
    );
    
  };
  
  export default StandingsView;
  