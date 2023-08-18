import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players'
      );
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} | <Link to={`/players/${player._id}`}>See Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;