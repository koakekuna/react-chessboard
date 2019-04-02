import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return <Board piecePosition={ [4,3] } />;
  }
}

export default App;
