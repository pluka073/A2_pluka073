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
      .from('qualifying')
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
  return (
    <div>
      <h2>Qualify {selectedRace}</h2>
      <table>
<thead>
  <tr>
    <th>Pos</th>
    <th></th>
    <th></th>
    <th>Q1</th>
    <th>Q2</th>
    <th>Q3</th>
  </tr>
</thead>
<tbody>
  {qualify.map((q) => (
    <tr key={q.number}>
        <td>{q.position}</td>
      <td>{q.drivers.forename}</td>
      <td>{q.drivers.surname}</td>
      <td>{q.q1}</td>
      <td>{q.q2}</td>
      <td>{q.q3}</td>
    </tr>
  ))}
</tbody>
</table>
    </div>
  );
};

export default QualifyTable;

