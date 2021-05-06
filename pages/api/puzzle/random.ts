import { randomPuzzle } from "@/utils/getPuzzle";

export default (req, res) => {
  const puzzle = randomPuzzle();
  res.statusCode = 200;
  res.json({
    fen: puzzle.fen,
    initialMove: puzzle.initialMove.uci,
    id: puzzle.id,
  });
};
