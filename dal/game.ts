import type { Game, Puzzle } from "@/types";
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
        id: puzzle.id,
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

export async function joinGame(
  gameKey: string,
  playerName: string
): Promise<void> {
  const name = playerName?.substr?.(0, 32);
  return new Promise<void>((resolve, reject) => {
    const gameRef = rtdb().ref("games/" + gameKey);
    gameRef.once("value", function (snapshot) {
      if (!snapshot.exists()) {
        return reject({ error: "game not found" });
      }
      const data = snapshot.val();
      const newPlayers = [...data.players, name?.substr(0, 32)];
      const newScores = { ...data.scores, [name?.substr(0, 32)]: 0 };
      gameRef.update(
        {
          players: newPlayers,
          scores: newScores,
        },
        function (error) {
          if (error) {
            return reject({ error: "could not update game" + error });
          } else {
            return resolve();
          }
        }
      );
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

export function startNewPuzzle(
  gameKey: string,
  newFen: string,
  newPuzzle: Puzzle,
  playerName: string
): void {
  rtdb()
    .ref("games/" + gameKey)
    .transaction((game) => {
      if (game === null) {
        return null;
      }
      const scores = game.scores;
      return {
        ...game,
        fen: newFen,
        moves: [],
        currentPuzzle: newPuzzle,
        scores: { ...scores, [playerName]: scores[playerName] + 2 },
      };
    });
}
