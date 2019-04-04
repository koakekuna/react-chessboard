import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import { observe } from './components/Game'
import './App.css';

const App = () => {
  const [knightPos, setPiecePos] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setPiecePos(newPos)));
  return (
    <div>
      <Board piecePosition={knightPos} />
    </div>
  )
}
export default App;