import React, { useState, useEffect } from 'react';
import '../../Modal.css';
import { createClient } from "@supabase/supabase-js";

const supaUrl = 'https://rtpsslzuthmeiqlmgzgs.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cHNzbHp1dGhtZWlxbG1nemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTgxOTMsImV4cCI6MjAyNDU3NDE5M30.cPX5jjynOI_GLePPAQrtVorBVVNLM6oN9VEUfCwyl5c';

const supabase = createClient(supaUrl, supaAnonKey);

const CircuitModal = ({ selectedRace, open, onClose }) => {
    const [qualify, setQualify] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchQualify = async () => {
            const { data, error } = await supabase
                .from('races')
                .select(`*, circuits(*)`)
                .eq('raceId', selectedRace);

            if (error) {
                console.error('Error fetching races:', error);
                return;
            }

            setQualify(data);
        };

        fetchQualify();
    }, [selectedRace]);

    const addToFavorites = () => {
        // Check if the circuit is already in favorites
        if (!favorites.find(circuit => circuit.id === qualify[0].circuits.id)) {
            setFavorites([...favorites, qualify[0].circuits]);
        }
    };

    if (!open) return null;

    return (
        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'
            >
                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        Close
                    </p>
                    <div className='content'>
                        <p>Name {qualify[0].name}</p>
                        <h1>Location: {qualify[0].circuits.location}</h1>
                        <p>Country {qualify[0].circuits.country}</p>
                        <p>URL {qualify[0].circuits.url}</p>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary' onClick={addToFavorites}>
                            <span className='bold'>Favourite</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircuitModal;
