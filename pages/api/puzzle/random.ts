import { randomPuzzle } from "@/utils/getPuzzle";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default (req, res) => {
  const puzzle = randomPuzzle();
  res.statusCode = 200;
  res.json({
    fen: puzzle.fen,
    initialMove: puzzle.initialMove.uci,
    id: puzzleNum,
  });
};
