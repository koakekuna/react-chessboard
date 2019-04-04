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
    }}>
      &#9822;
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