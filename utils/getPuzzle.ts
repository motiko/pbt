import puzzles from "data/repetition/level-10.json";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function byId(puzzleId) {
  return puzzles.find((p) => p.id == puzzleId);
}

function randomPuzzle() {
  const puzzleNum = randomNum(0, puzzles.length - 1);
  return puzzles[puzzleNum];
}

export { randomPuzzle, byId };
