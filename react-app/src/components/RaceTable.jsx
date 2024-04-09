import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import ResultsView from './Views/ResultsView';
import StandingsView from './Views/StandingsView';
import CircuitModal from './Modal/CircuitModal';

const supaUrl = 'https://rtpsslzuthmeiqlmgzgs.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cHNzbHp1dGhtZWlxbG1nemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTgxOTMsImV4cCI6MjAyNDU3NDE5M30.cPX5jjynOI_GLePPAQrtVorBVVNLM6oN9VEUfCwyl5c';

const supabase = createClient(supaUrl, supaAnonKey);

const RaceTable = ({ selectedYear }) => {
  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedView, setSelectedView] = useState(null);
  const [showResultsView, setShowResultsView] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const fetchRaces = async () => {
      const { data, error } = await supabase
      .from('races')
      .select('*')
      .eq('year', selectedYear);

      if (error) {
        console.error('Error fetching races:', error);
        return;
      }

      setRaces(data);
    };

    fetchRaces();
  }, [selectedYear]);

  const handleViewResults = (race) => {
    setSelectedRace(race);
    setSelectedView('results');
    setShowResultsView(true);
  };

  const handleViewStandings = (race) => {
    setSelectedRace(race);
    setSelectedView('standings');
    setShowResultsView(false);
  };

  const handleRemoveResultsView = () => {
    setShowResultsView(false);
  };



  return (
    <div className='main-content'>
    <div className='race'>
      <h2>Races in {selectedYear}</h2>
      <div className='race-box'>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Circuit</th>
            <th>Results</th>
            <th>Standings</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race.raceId}>
              <td>{race.round}</td>
              <td> 
              <a href="#" onClick={() => setOpenModal(true)}>{race.name}</a> 
              {setOpenModal && (
        <div>
          <CircuitModal selectedRace={race.raceId} open={openModal} onClose={() => setOpenModal(false)} />
        
          </div>
      )}
              </td>
              <td>
                <button className='button' onClick={() => handleViewResults(race)}>Results</button>
              </td>
              <td>
                <button className='button' onClick={() => handleViewStandings(race)}>Standings</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
<div className='results'>
      {selectedRace && selectedView === 'results' && showResultsView && (
        
        <div className="race-box">
          <p>{selectedRace.raceId}</p>
          <ResultsView selectedRace={selectedRace.raceId} />
          <button onClick={handleRemoveResultsView}>Remove Results View</button>
        </div>
        
      )}
      
      {selectedRace && selectedView === 'standings' && (
        <div className="race-box">
          <p>{selectedRace.raceId}</p>
          <StandingsView selectedRace={selectedRace.raceId} />
          </div>
    )}


     
    </div>
    
    </div>
  );
};

export default RaceTable;
