import { rtdb } from "@/dal/realtime-db";

export default (req, res) => {
  const { name, id } = JSON.parse(req.body);
  console.log(id);
  return new Promise<void>((resolve, reject) => {
    const gameRef = rtdb().ref("games/" + id);
    gameRef.once("value", function (snapshot) {
      if (!snapshot.exists()) {
        res.statusCode = 200;
        res.json({
          error: "game not found",
        });
        reject();
      }
      const data = snapshot.val();
      console.log(data);
      const newPlayers = [...data.players, name?.substr(0, 32)];
      const newScores = { ...data.scores, [name?.substr(0, 32)]: 0 };
      console.log(newPlayers);
      gameRef.update(
        {
          players: newPlayers,
          scores: newScores,
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
              id,
            });
            resolve();
          }
        }
      );
    });
  });
};
