import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

const supaUrl = 'https://rtpsslzuthmeiqlmgzgs.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cHNzbHp1dGhtZWlxbG1nemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTgxOTMsImV4cCI6MjAyNDU3NDE5M30.cPX5jjynOI_GLePPAQrtVorBVVNLM6oN9VEUfCwyl5c';

const supabase = createClient(supaUrl, supaAnonKey);

const QualifyTable = ({ selectedRace }) => {
    console.log(selectedRace)
  const [qualify, setQualify] = useState([]);
  useEffect(() => {
   // if (!selectedYear) return; // If no year is selected, do nothing

    const fetchQualify = async () => {
      const { data, error } = await supabase
      .from('results')
      .select(`*,
      drivers(*)`)
      .eq('raceId', selectedRace);

      if (error) {
        console.error('Error fetching races:', error);
        return;
      }

      setQualify(data);
    };

    fetchQualify();
  }, [selectedRace]);

const firstPlace = qualify.find(driver => driver.position === '1');
const secondPlace = qualify.find(driver => driver.position === '2');
const thirdPlace = qualify.find(driver => driver.position === '3');
console.log(firstPlace && firstPlace.drivers.surname)
  return (
    <div>
      <h2>Results {selectedRace}</h2>
      <div className='container'>
        <div className='column'>
          <h1>1st</h1>
          {firstPlace && <p>{firstPlace.drivers.forename} {firstPlace.drivers.surname}</p>}
        </div>
        <div className='column'>
          <h1>2nd</h1>
          {secondPlace && <p>{secondPlace.drivers.forename} {secondPlace.drivers.surname}</p>}
        </div>
        <div className='column'>
          <h1>3rd</h1>
          {thirdPlace && <p>{thirdPlace.drivers.forename} {thirdPlace.drivers.surname}</p>}
        </div>
      </div>
      <table>
<thead>
  <tr>
    <th>Pos</th>
    <th></th>
    <th></th>
    <th>Laps</th>
    <th>Pts</th>
  </tr>
</thead>
<tbody>
  {qualify.map((q) => (
    <tr key={q.number}>
        <td>{q.position}</td>
      <td>{q.drivers.forename}</td>
      <td>{q.drivers.surname}</td>
      <td>{q.laps}</td>
      <td>{q.points}</td>
    </tr>
  ))}
</tbody>
</table>
    </div>
  );
};

export default QualifyTable;

