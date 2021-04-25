import puzzles from "../../../data/repetition/level-1.json";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default (req, res) => {
  const puzzleNum = Math.floor(random(0, puzzles.length - 1));
  const puzzle = puzzles[puzzleNum];
  res.statusCode = 200;
  res.json({
    fen: puzzle.fen,
    initialMove: puzzle.initialMove.uci,
    id: puzzleNum,
  });
  // return res;
};
