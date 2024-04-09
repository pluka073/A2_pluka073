import { useState, useEffect } from 'react';
import DriverModal from '../Modal/DriverModal';
import { createClient } from "@supabase/supabase-js";

const supaUrl = 'https://rtpsslzuthmeiqlmgzgs.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cHNzbHp1dGhtZWlxbG1nemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTgxOTMsImV4cCI6MjAyNDU3NDE5M30.cPX5jjynOI_GLePPAQrtVorBVVNLM6oN9VEUfCwyl5c';

const supabase = createClient(supaUrl, supaAnonKey);

const DriverTable = ({ selectedRace }) => {

  const [qualify, setQualify] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
   // if (!selectedYear) return; // If no year is selected, do nothing

    const fetchQualify = async () => {
      const { data, error } = await supabase
      .from('driverStandings')
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
      <h2>Drivers {selectedRace}</h2>
      <table>
<thead>
  <tr>
    <th>Pos</th>
    <th></th>
    <th>Points</th>
    <th>Wins</th>
  </tr>
</thead>
<tbody>
  {qualify.map((q) => (
    <tr key={q.number}>
        <td>{q.position}</td>
      <td>
      <a href="#" onClick={() => setOpenModal(true)}>
      {q.drivers.forename} {q.drivers.surname}
      </a>
      {setOpenModal && (
        <div>
          <DriverModal selectedDriver={q.driverId} open={openModal} onClose={() => setOpenModal(false)} />
        
          </div>
      )}
      </td>
      <td>{q.points}</td>
      <td>{q.wins}</td>
    </tr>
  ))}
</tbody>
</table>
    </div>
  );
};

export default DriverTable;

