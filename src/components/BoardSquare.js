import React from 'react';
import Square from './Square';
import { canMoveKnight, movePiece } from './Game'
import { ItemTypes } from './ItemTypes'
import { DropTarget } from 'react-dnd'

const BoardSquare = ({ 
  x,
  y,
  connectDropTarget,
  children
}) => {
  // fill the background with the correct color
  const black = (x + y) % 2 === 1;

  return connectDropTarget(
    <div>
      <Square isBlack={black}>{children}</Square>
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