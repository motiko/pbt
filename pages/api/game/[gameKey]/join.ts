import { joinGame } from "@/dal/game";

export default (req, res) => {
  const { name } = req.body;
  const { gameKey } = req.query;
  console.log(gameKey);
  console.log(name);
  return joinGame(gameKey, name)
    .then(() => {
      res.statusCode = 200;
      res.json({ id: gameKey });
    })
    .catch((error) => {
      res.statusCode = 500;
      res.json({ error });
    });
};
