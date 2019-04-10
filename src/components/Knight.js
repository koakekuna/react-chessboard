import React from 'react'
import { ItemTypes } from './ItemTypes';
import { DragSource, DragPreviewImage } from 'react-dnd';

const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src='images/knight.jpg' />
      <div
      ref={connectDragSource}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '5vw',
        height: 'auto',
        cursor: 'move',
        color: 'white',
      }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" alt="White Knight"/>
      </div>
    </>
  )
};

export default DragSource(
  ItemTypes.KNIGHT,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(Knight);