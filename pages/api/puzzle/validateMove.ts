import puzzles from "../../../data/repetition/level-1.json";

export default (req, res) => {
  const puzzleId = req.query.puzzleId;
  const movesStr = req.query.moves;
  const puzzle = puzzles.find((p) => p.id == puzzleId);
  const { lines } = puzzle;
  const moves = movesStr.split(",");
  console.log(moves);
  const result = evaluateLine(lines, moves);
  console.log(result);
  res.statusCode = 200;
  if (result == "win") {
    res.json({ valid: true, win: true });
  } else if (result == "invalid") {
    res.json({ valid: false });
  } else {
    res.json({ valid: true, nextMove: result });
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
    return evaluateLine(
      line[moves[0]],
      moves.filter((_, i) => i > 0)
    );
  } else {
    return "invalid";
  }
}
