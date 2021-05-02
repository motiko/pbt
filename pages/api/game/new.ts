import { playMoves } from "@/utils/chess";
import rtdb from "@/utils/firbase-admin";
import { randomPuzzle } from "@/utils/getPuzzle";

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default (req, res) => {
  const puzzle = randomPuzzle();
  const id = random(1, 10000);
  const userName = "shnurok";
  const newFen = playMoves(puzzle.fen, [puzzle.initialMove.uci]);
  return new Promise<void>((resolve, reject) => {
    rtdb()
      .ref("games/" + id)
      .set(
        {
          players: [userName],
          fen: newFen,
          moves: [],
          currentPuzzle: {
            id: puzzle.id,
            initialFen: puzzle.fen,
            initialMove: puzzle.initialMove.uci,
          },
        },
        function (error) {
          if (error) {
            res.statusCode = 500;
            res.json({
              error: error,
            });
            resolve();
          } else {
            res.statusCode = 200;
            res.json({
              fen: puzzle.fen,
              initialMove: puzzle.initialMove.uci,
              id,
            });
            resolve();
          }
        }
      );
  });
};
