import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

const supaUrl = 'https://rtpsslzuthmeiqlmgzgs.supabase.co'; 
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cHNzbHp1dGhtZWlxbG1nemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTgxOTMsImV4cCI6MjAyNDU3NDE5M30.cPX5jjynOI_GLePPAQrtVorBVVNLM6oN9VEUfCwyl5c'; 
 
const supabase = createClient(supaUrl, supaAnonKey); 

const SeasonSelect = function (props) { 
    const [seasons, setSeasons] = useState([]);
  
    useEffect( () => {
        selectSeasons();
       }, []);
       async function selectSeasons() {
        console.log('getting from supabase … here to check if I’ve gone infinite');
       // uses the same API as your assign 1 solutions
       const { data, error } = await supabase.from('seasons')
       .select('*')
       .order('year', {ascending: false});
       if (error) {
       console.error('Error fetching seasons:', error);
       return;
       }
       setSeasons(data);
       }
  
    const handleChange = (event) => {
      props.onSelectYear(event.target.value);
    };
  
    return (
      <div className="App">
        <h1>Select a Season</h1>
        <select value={props.selectedSeason} id='seasons' onChange={handleChange}>
          <option value="">Select a season...</option>
          {seasons.map(season => (
            <option key={season.year} id={season.year} value={season.year}>{season.year}</option>
          ))}
        </select>
        {props.selectedSeason && <p>You selected: {props.selectedSeason}</p>}
      </div>
    );
  }
  

export default SeasonSelect;