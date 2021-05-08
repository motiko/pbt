import { startNewPuzzle, submitMove, takePoint } from "@/dal/game";
import { byId, randomPuzzle, evaluateLine } from "@/lib/getPuzzle";
import { playMoves } from "@/lib/chess";

export default (req, res) => {
  const { puzzleId, gameKey: gameId, playerName } = req.query;
  const movesStr = req.query.moves;
  const puzzle = byId(puzzleId);
  const { lines } = puzzle;
  const moves = movesStr.split(",");
  console.log("Submitted Moves:", moves);
  console.log("Puzzle:", puzzle);
  const replyMove = evaluateLine(lines, moves);
  console.log("Result: ", replyMove);
  res.statusCode = 200;
  if (replyMove == "win") {
    const newFullPuzzle = randomPuzzle();
    const newPuzzle = {
      id: newFullPuzzle.id,
      initialFen: newFullPuzzle.fen,
      initialMove: newFullPuzzle.initialMove.uci,
    };
    const newFen = playMoves(newFullPuzzle.fen, [
      newFullPuzzle.initialMove.uci,
    ]);
    startNewPuzzle(gameId, newFen, newPuzzle, playerName);
    res.json({ valid: true, win: true, currentPuzzle: newPuzzle });
  } else if (replyMove == "invalid" || replyMove == "retry") {
    takePoint(gameId, playerName);
    res.json({ valid: false });
  } else {
    // valid
    const newFen = playMoves(puzzle.fen, [
      puzzle.initialMove.uci,
      ...moves,
      replyMove,
    ]);
    submitMove(gameId, playerName, newFen, [...moves, replyMove]);
    res.json({ valid: true });
  }
};
