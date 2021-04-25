import puzzles from "../../../data/repetition/level-1.json";
import rtdb from "../../../db";

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default (req, res) => {
  const puzzleNum = Math.floor(random(0, puzzles.length - 1));
  const puzzle = puzzles[puzzleNum];
  const id = random(1, 10000);
  console.log(id);
  try {
    createNewGameRecord(id, puzzle.id, "shnurok");
  } catch (e) {
    console.error("Firebase err: ", e);
  }
  res.statusCode = 200;
  res.json({
    fen: puzzle.fen,
    initialMove: puzzle.initialMove.uci,
    id,
  });
};

function createNewGameRecord(gameId, puzzleId, userName) {
  rtdb.ref("games/" + gameId).set({
    players: [userName],
    puzzleId,
  });
}
