import React from 'react';
import Knight from './Knight';
import Pawn from './Pawn';

export const Piece = ({ isPiece }) => (isPiece ? <Knight /> : null);