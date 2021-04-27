import puzzles from "data/repetition/level-10.json";
import * as ChessJS from "chess.js";
import rtdb from "@/utils/firbase-admin";
const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

export default (req, res) => {
  const { puzzleId, gameId } = req.query;
  const movesStr = req.query.moves;
  const puzzle = puzzles.find((p) => p.id == puzzleId);
  const { lines } = puzzle;
  const moves = movesStr.split(",");
  console.log("Submitted Moves:", moves);
  const result = evaluateLine(lines, moves);
  console.log("Result: ", result);
  res.statusCode = 200;
  if (result == "win") {
    res.json({ valid: true, win: true });
  } else if (result == "invalid") {
    res.json({ valid: false });
  } else {
    const chess = new Chess(puzzle.fen);
    chess.move(puzzle.initialMove.uci, { sloppy: true });
    moves.forEach((move) => chess.move(move, { sloppy: true }));
    chess.move(result, { sloppy: true });
    rtdb.ref("games/" + gameId).update({
      fen: chess.fen(),
      moves: [...moves, result],
    });
    res.json({ valid: true });
  }
};

function evaluateLine(line, moves) {
  if (moves.length === 0) {
    if (Object.values(line)[0] === "win") {
      return "win";
    }
    return Object.keys(line)[0];
  }

  if (Object.keys(line).includes(moves[0])) {
    if (Object.values(line)[0] === "win") {
      return "win";
    }
    return evaluateLine(
      line[moves[0]],
      moves.filter((_, i) => i > 0)
    );
  } else {
    return "invalid";
  }
}
