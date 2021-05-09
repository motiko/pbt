import { startNewPuzzle, submitMove, takePoint } from "@/dal/game";
import { byId, randomPuzzle, evaluateLine } from "@/lib/getPuzzle";
import { playMoves } from "@/lib/chess";
import { NextApiRequest, NextApiResponse } from "next";
import { Puzzle } from "@/types";

type Response = { valid: boolean; win?: boolean; currentPuzzle?: Puzzle };
export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  const { puzzleId, gameKey: gameId, playerName, moves } = req.query;
  if (
    typeof puzzleId !== "string" ||
    typeof gameId !== "string" ||
    typeof moves !== "string" ||
    typeof playerName !== "string"
  ) {
    return;
  }
  const puzzle = byId(Number(puzzleId));
  const { lines } = puzzle;
  const movesArr = moves.split(",");
  console.log("Submitted Moves:", movesArr);
  console.log("Puzzle:", puzzle);
  const replyMove = evaluateLine(lines, movesArr);
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
      ...movesArr,
      replyMove,
    ]);
    submitMove(gameId, playerName, newFen, [...movesArr, replyMove]);
    res.json({ valid: true });
  }
};
