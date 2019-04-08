import React from 'react'
import { ItemTypes } from './ItemTypes';
import { DragSource, DragPreviewImage } from 'react-dnd';

const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src='https://icon2.kisspng.com/20180811/ilk/kisspng-mr-peanutbutter-desktop-wallpaper-animation-bojac-telegram-sticker-4-from-collection-5b6e73db6ddea9.48252693153396527545.jpg' />
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