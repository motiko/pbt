import * as ChessJS from "chess.js";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

export { Chess };

export function playMoves(initialFen, moves) {
  const chess = new Chess(initialFen);
  moves.forEach((move) => chess.move(move, { sloppy: true }));
  return chess.fen();
}
