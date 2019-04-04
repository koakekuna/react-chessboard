import React from 'react';

export default function Square({ isBlack, children }) {
  // fill the background with the correct color
  const backgroundColor = isBlack ? '#b5915f' : '#441a03';
  return (
    <div className="square"
    style={{
      backgroundColor: backgroundColor,
    }}>
      {children}
    </div>
  )
};