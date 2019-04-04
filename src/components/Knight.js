import React from 'react'
import { ItemTypes } from './ItemTypes';
import { DragSource } from 'react-dnd';

const Knight = ({ connectDragSource, isDragging }) => {
  return (
    <div
    ref={connectDragSource}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: '5vw',
      cursor: 'move',
      color: 'white',
    }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" alt="White Knight"/>
    </div>
  )
};

export default DragSource(
  ItemTypes.KNIGHT,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Knight);