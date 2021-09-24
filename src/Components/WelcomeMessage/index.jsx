import React from 'react';

const WelcomeMessage = ({ userName }) => {
  return (
    <div>
      <h3>Welcome, {userName}</h3>
    </div>
  )
}

export default WelcomeMessage;