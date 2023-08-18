import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlayerDetail() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPlayer(id);
  }, [id]);

  const fetchPlayer = async (playerId) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players/${playerId}`
      );
      const data = await response.json();
      setPlayer(data);
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  };

  return (
    <div>
      <h2>Player Details</h2>
      {player ? (
        <div>
          <p>Name: {player.name}</p>
          {/* Display other player details */}
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
}

export default PlayerDetail;
