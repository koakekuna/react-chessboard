import React from 'react'
import { ItemTypes } from './ItemTypes';
import { DragSource, DragPreviewImage } from 'react-dnd';

const Pawn = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src='https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' />
      <div
      ref={connectDragSource}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '5vw',
        height: 'auto',
        cursor: 'move',
        color: 'white',
      }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" alt="White Pawn"/>
      </div>
    </>
  )
};

export default DragSource(
  ItemTypes.PAWN,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(Pawn);