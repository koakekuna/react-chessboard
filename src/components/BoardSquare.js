import React from 'react';
import Square from './Square';
import { canMoveKnight, movePiece } from './Game'
import { ItemTypes } from './ItemTypes'
import { DropTarget } from 'react-dnd'
import Overlay from './Overlay'

const BoardSquare = ({ 
  x,
  y,
  connectDropTarget,
  isOver,
  canDrop,
  children
}) => {
  // fill the background with the correct color
  const black = (x + y) % 2 === 1;

  return connectDropTarget(
    <div style={{
      position: 'relative',
    }}>
      <Square isBlack={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>,
  )
}

export default DropTarget(
  ItemTypes.KNIGHT,
  {
    canDrop: props => canMoveKnight(props.x, props.y),
    drop: props => movePiece(props.x, props.y),
  },
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }
  }
)(BoardSquare)