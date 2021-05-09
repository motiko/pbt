import type { Moves, PuzzleId } from "@/types";

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
    return false;
  }
}

// export function newGame() {}
// export function joinGame() {}
