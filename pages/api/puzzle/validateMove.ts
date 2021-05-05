import rtdb from "@/utils/firbase-admin";
import { byId, randomPuzzle } from "@/utils/getPuzzle";
import { Chess, playMoves } from "@/utils/chess";

export default (req, res) => {
  const { puzzleId, gameId, playerName } = req.query;
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
    const newPuzzle = randomPuzzle();
    const currentPuzzle = {
      id: newPuzzle.id,
      initialFen: newPuzzle.fen,
      initialMove: newPuzzle.initialMove.uci,
    };
    const newFen = playMoves(newPuzzle.fen, [newPuzzle.initialMove.uci]);
    rtdb()
      .ref("games/" + gameId)
      .transaction((game) => {
        if (game === null) {
          return null;
        }
        const scores = game.scores;
        return {
          ...game,
          fen: newFen,
          moves: [],
          currentPuzzle,
          scores: { ...scores, [playerName]: scores[playerName] + 2 },
        };
      });
    res.json({ valid: true, win: true, currentPuzzle });
  } else if (replyMove == "invalid" || replyMove == "retry") {
    rtdb()
      .ref("games/" + gameId)
      .transaction((game) => {
        if (game === null) {
          return null;
        }
        return {
          ...game,
          scores: { ...game.scores, [playerName]: game.scores[playerName] - 1 },
        };
      });
    res.json({ valid: false });
  } else {
    // valid
    const newFen = playMoves(puzzle.fen, [
      puzzle.initialMove.uci,
      ...moves,
      replyMove,
    ]);
    const gameRef = rtdb().ref("games/" + gameId);
    gameRef.once("value", function (snapshot) {
      if (!snapshot.exists()) {
        res.statusCode = 200;
        res.json({
          error: "game not found",
        });
      }
      var data = snapshot.val();
      console.log(data);
      gameRef.update({
        fen: newFen,
        moves: [...moves, replyMove],
        scores: {
          ...data.scores,
          [playerName]: data.scores[playerName] + 1,
        },
      });
      res.json({ valid: true });
    });
  }
};

function evaluateLine(line, moves) {
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
