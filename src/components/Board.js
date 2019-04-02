import React from 'react';
import Square from './Square';
import Knight from './Knight';
import { canMoveKnight, movePiece } from './Game';

function renderSquare(i, [piecePositionX, piecePositionY]) {
  // i = 57; x = 1; y = 7
  const x = i % 8;
  const y = Math.floor(i/8);
  
  // if summed coordinates are divisible by 2, this square is black
  const isBlack = (x + y) % 2 === 0;
  // Are the piece's coordinates the same as rendered square?
  const isPieceHere = x === piecePositionX && y === piecePositionY;
  // render the piece component if the piece is here
  const piece = isPieceHere ? <Knight /> : null;
  // fill the background with the correct color
  const fill = isBlack ? '#b5915f' : '#441a03';

  return (
    <div 
    class="square-wrapper"
    onClick={() => handleSquareClick(x, y)}
    style={{
      display: 'grid',
      placeContent: 'center',
      backgroundColor: fill,
    }}>
      <Square 
      key={i} 
      black={isBlack}>
        {piece}
      </Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    movePiece(toX, toY);
  }
}

export default function Board({ piecePosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, piecePosition))
  }
  return (
    <div 
      className="wrapper"
      style={{
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
  );
}