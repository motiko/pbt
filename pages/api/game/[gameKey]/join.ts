import { joinGame } from "@/dal/game";
import type { NextApiRequest, NextApiResponse } from "next";

type Response =
  | {
      error: string;
    }
  | { id: string };

export default (req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> => {
  const { name } = req.body;
  const { gameKey } = req.query;
  if (typeof gameKey !== "string") {
    return;
  }
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
