import React from 'react';

const WelcomeMessage = ({ person }) => {
  return (
    <div>
      <h3>Welcome, {person.name}</h3>
    </div>
  )
}

export default WelcomeMessage;