import React, { useState } from 'react';
import ResultsTable from './ResultsTable';
import QualifyTable from './QualifyTable';

const ResultsView = ({selectedRace}) => {
  const [race, setSelectedRace] = useState(null);
  
    const handleRaceSelect = (race) => {
      setSelectedRace(race);
      
    };
    return (
      
      <div className="container"> 
     
      <div className='column'>
        <QualifyTable selectedRace={selectedRace} />
        </div>
        <div className='column'>
        <ResultsTable selectedRace={selectedRace} />
      </div>
      </div>
      
    );
    
  };
  
  export default ResultsView;
  