import React from 'react';

export default function Square({ black, children }) {
  const stroke = black ? 'black' : 'white';

  return (
    <div class="square"
      style={{ 
        color: stroke,
        fontSize: '5vw',
      }}
    >
      {children}
    </div>
  )
};