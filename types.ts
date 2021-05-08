type FEN = string;
type UCIMove = string;
type PuzzleId = string;

type Scores = {
  [playerName: string]: number;
};

type Game = {
  scores: Scores;
  players: Array<string>;
  fen: FEN;
  moves: Array<UCIMove>;
  currentPuzzle: Puzzle;
  puzzlesHistory: Array<PuzzleId>;
};

type Puzzle = {
  id: PuzzleId;
  initialFen: FEN;
  initialMove: UCIMove;
};

export type { FEN, Game, Puzzle };

