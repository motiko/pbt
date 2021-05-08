import puzzles from "data/repetition/level-10.json";
import { randomNum } from "./utils";

export function byId(puzzleId) {
  return puzzles.find((p) => p.id == puzzleId);
}

export function randomPuzzle() {
  const puzzleNum = randomNum(0, puzzles.length - 1);
  return puzzles[puzzleNum];
}

export function evaluateLine(line, moves) {
  if (moves.length === 0) {
    if (Object.values(line)[0] === "win") {
      return "win";
    }
    return Object.keys(line)[0];
  }

  if (Object.keys(line).includes(moves[0]) && line[moves[0]] !== "retry") {
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
