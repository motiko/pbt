import * as ChessJS from "chess.js";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

export { Chess };

export function playMoves(initialFen, moves = []) {
  const chess = new Chess(initialFen);
  moves.forEach((move) => chess.move(move, { sloppy: true }));
  return chess.fen();
}

export function movableDests(fen) {
  const chess = new Chess(fen);
  const dests = new Map();
  chess.SQUARES.forEach((s) => {
    const ms = chess.moves({ square: s, verbose: true });
    if (ms.length)
      dests.set(
        s,
        ms.map((m) => m.to)
      );
  });
  return dests;
}

export function sideToMove(fen) {
  const chess = new Chess(fen);
  return chess.turn() === "w" ? "white" : "black";
}

export function ascii(fen) {
  const chess = new Chess(fen);
  return chess.ascii();
}
