import { createNewGame } from "@/dal/game";

export default function newGameApi(req, res) {
  console.log(req.body);
  const { name = "" } = req.body;
  console.log(name);
  return createNewGame(name)
    .then((newGame) => {
      console.log(newGame);
      res.statusCode = 200;
      res.json({
        fen: newGame.currentPuzzle.initialFen,
        initialMove: newGame.currentPuzzle.initialMove,
        key: newGame.key,
      });
      return true;
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.json({
        error: error,
      });
    });
}
