import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';


function Chess() {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <App />
    </DragDropContextProvider>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Chess />, rootElement);
