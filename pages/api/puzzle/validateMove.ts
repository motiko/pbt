import rtdb from "@/utils/firbase-admin";
import { byId, randomPuzzle } from "@/utils/getPuzzle";
import { Chess, playMoves } from "@/utils/chess";

export default (req, res) => {
  const { puzzleId, gameId } = req.query;
  const movesStr = req.query.moves;
  const puzzle = byId(puzzleId);
  const { lines } = puzzle;
  const moves = movesStr.split(",");
  console.log("Submitted Moves:", moves);
  console.log("Puzzle:", puzzle);
  const result = evaluateLine(lines, moves);
  console.log("Result: ", result);
  res.statusCode = 200;
  if (result == "win") {
    const newPuzzle = randomPuzzle();
    const currentPuzzle = {
      id: newPuzzle.id,
      initialFen: newPuzzle.fen,
      initialMove: newPuzzle.initialMove.uci,
    };
    const newFen = playMoves(newPuzzle.fen, [newPuzzle.initialMove.uci]);
    rtdb()
      .ref("games/" + gameId)
      .update({
        fen: newFen,
        moves: [],
        currentPuzzle,
      });
    res.json({ valid: true, win: true, currentPuzzle });
  } else if (result == "invalid" || result == "retry") {
    res.json({ valid: false });
  } else {
    // valid
    const newFen = playMoves(puzzle.fen, [
      puzzle.initialMove.uci,
      ...moves,
      result,
    ]);
    rtdb()
      .ref("games/" + gameId)
      .update({
        fen: newFen,
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
