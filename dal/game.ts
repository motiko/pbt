import type { Game } from "@/types";
import { randomPuzzle } from "@/utils/getPuzzle";
import { playMoves } from "@/utils/chess";
import { rtdb } from "./realtime-db";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function createNewGame(
  ownerName: string
): Promise<Game & { key: string }> {
  const name = ownerName?.substr?.(0, 32);
  const key = randomNum(1, 10000);
  const puzzle = randomPuzzle();
  const newFen = playMoves(puzzle.fen, [puzzle.initialMove.uci]);
  return new Promise((resolve, reject) => {
    const newGame: Game = {
      players: [name],
      scores: {
        [name]: 0,
      },
      fen: newFen,
      moves: [],
      puzzlesHistory: [],
      currentPuzzle: {
        id: String(puzzle.id),
        initialFen: puzzle.fen,
        initialMove: puzzle.initialMove.uci,
      },
    };
    rtdb()
      .ref("games/" + key)
      .set(newGame, function (error) {
        if (error) {
          reject({ error });
        } else {
          resolve({ ...newGame, key: String(key) });
        }
      });
  });
}

export { createNewGame };

