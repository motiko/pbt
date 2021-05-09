import type { NewGameData, NewGameResponse } from "@/pages/api/game/new";
import type { GameKey, Moves, PuzzleId } from "@/types";

export async function newGame(name: string): Promise<NewGameData> {
  const response = await fetch("/api/game/new", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data, errors }: NewGameResponse = await response.json();
  if (response.ok) {
    return data;
  }
  return Promise.reject(errors);
}

export async function joinGame(
  gameKey: GameKey,
  name: string
): Promise<boolean> {
  try {
    const response = await fetch(`/api/game/${gameKey}/join`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.ok;
  } catch (e) {
    console.error(e);
    return Promise.reject(false);
  }
}

export async function validateMove(
  gameKey: string,
  moves: Moves,
  playerName: string,
  puzzleId: PuzzleId
): Promise<boolean> {
  try {
    const playerName = sessionStorage.getItem("name");
    const response = await fetch(
      `/api/game/${gameKey}/validateMove?moves=${moves}&puzzleId=${puzzleId}&playerName=${playerName}`
    );
    if (response.ok) {
      const result = await response.json();
      return result.valid;
    }
  } catch (e) {
    console.error(e);
    return Promise.reject(false);
  }
}
