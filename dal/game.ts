import type { Game } from "@/types";
import { randomPuzzle } from "@/lib/getPuzzle";
import { playMoves } from "@/lib/chess";
import { rtdb } from "./realtime-db";
import { randomNum } from "@/lib/utils";

export async function createNewGame(
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

export function takePoint(gameKey: string, playerName: string): void {
  rtdb()
    .ref("games/" + gameKey)
    .transaction((game) => {
      if (game === null) {
        return null;
      }
      return {
        ...game,
        scores: { ...game.scores, [playerName]: game.scores[playerName] - 1 },
      };
    });
}

export function submitMove(
  gameKey: string,
  playerName: string,
  newFen: string,
  moves: Array<string>
): void {
  rtdb()
    .ref("games/" + gameKey)
    .transaction((game) => {
      if (game === null) {
        return null;
      }
      return {
        ...game,
        fen: newFen,
        moves,
        scores: {
          ...game.scores,
          [playerName]: game.scores[playerName] + 1,
        },
      };
    });
}
