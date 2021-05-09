type FEN = string;
export type UCIMove = string;
type PuzzleId = number;

export type Moves = Array<UCIMove>;

export type Scores = {
  [playerName: string]: number;
};

type Game = {
  scores: Scores;
  players: Array<string>;
  fen: FEN;
  moves: Moves;
  currentPuzzle: Puzzle;
  puzzlesHistory: Array<PuzzleId>;
};

type Puzzle = {
  id: PuzzleId;
  initialFen: FEN;
  initialMove: UCIMove;
};

export type { FEN, Game, Puzzle };

export type Line =
  | {
      [move: string]: Line;
    }
  | "win"
  | "retry" | string;


export type StoredPuzzle = {
  id: number;
  fen: string;
  lines: Line;
  initialMove: { san: string; uci: string };
};
