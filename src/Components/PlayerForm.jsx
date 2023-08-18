import React, { useState } from 'react';

function PlayerForm() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, owner, team }),
        }
      );
      if (response.ok) {
        console.log('Player created!');
        setName('');
        setOwner('');
        setTeam('');
      }
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, owner, and team */}
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}

export default PlayerForm;
