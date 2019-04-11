import React from 'react';
import BoardSquare from './BoardSquare';
import { Piece } from './Piece';

const Board = ({ piecePosition: [pieceX, pieceY] }) => {
  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i/8);
    return (
      <div 
      key={i}
      className="square-wrapper">
        <BoardSquare x={x} y={y}>
          <Piece isPiece={x === pieceX && y === pieceY} />
        </BoardSquare>
      </div>
    )
  }
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }
  return <div style={{
    border: '20px solid #462921',
    width: '80vw',
    margin: '0 auto',
    display: 'grid',
    gridGap: '0',
    gridTemplateColumns: 'repeat(8, minmax(32px, 10vw))',
    gridTemplateRows: 'repeat(8, minmax(32px, 10vw))',
  }}>
    {squares}
  </div>
}

export default Board;