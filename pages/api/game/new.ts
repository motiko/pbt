import { createNewGame } from "@/dal/game";
import { UCIMove } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export type NewGameData = {
  fen: string;
  initialMove: UCIMove;
  key: string;
};

export type NewGameResponse = { errors?: Array<string>; data?: NewGameData };

export default function newGameApi(
  req: NextApiRequest,
  res: NextApiResponse<NewGameResponse>
): Promise<void> {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    const response = {
      errors: ["No name"],
    };
    res.statusCode = 500;
    res.json(response);
    return Promise.reject(response);
  }
  return createNewGame(name)
    .then((newGame) => {
      console.log(newGame);
      res.statusCode = 200;
      res.json({
        data: {
          fen: newGame.currentPuzzle.initialFen,
          initialMove: newGame.currentPuzzle.initialMove,
          key: newGame.key,
        },
      });
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.json({
        errors: [error.toString()],
      });
    });
}
