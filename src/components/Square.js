import React from 'react';

export default function Square({ black, children }) {
  const fill = black ? '#b5915f' : '#441a03';
  const stroke = black ? 'black' : 'white';

  return (
    <div class="square"
      style={{ 
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: fill,
        color: stroke,
        fontSize: '5vw',
      }}
    >
      {children}
    </div>
  )
};