import React, { useEffect, useState } from "react";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import { getFirebase } from "@/lib/firebase";
// import { movableDests, sideToMove } from "@/lib/chess";
import router from "next/router";
import { Scores } from "@/types";
import { validateMove } from "@/lib/fetch";
import { ChessBoard } from "./ChessBoard";

export type GameProps = { id: string };

function Game({ id }: GameProps): JSX.Element {
  const [fen, setFen] = useState("");
  // const [lastMove, setLastMove] = useState([]);
  const [movesHistory, setMovesHistory] = useState([]);
  const [puzzleId, setPuzzleId] = useState("");
  const [scores, setScores] = useState<Scores>({});
  const [fails, setFails] = useState(0);

  useEffect(() => {
    const playerName = sessionStorage.getItem("name");
    if (!playerName) {
      router.push({
        pathname: `/game/${id}/join`,
      });
    }
    const db = getFirebase().database();
    const gameRef = db.ref(`games/${id}`);
    const onGameChange = (snapshot) => {
      const game = snapshot.val();
      setFen(game.fen);
      setMovesHistory(game.moves || []);
      setPuzzleId(game.currentPuzzle.id);
      setScores(game.scores);
    };
    gameRef.on("value", onGameChange);

    return () => {
      gameRef.off("value", onGameChange);
    };
  }, []);

  const onMove = async (from, to) => {
    console.log(123);
    console.log(from, to);
    const playerName = sessionStorage.getItem("name");
    const result = await validateMove(
      id,
      [...movesHistory, `${from}${to}`],
      playerName,
      Number(puzzleId)
    );
    console.log(result);
    if (!result) {
      console.log(result);
      setFails(fails + 1);
    }
  };

  return (
    <div className="pt-8 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <PlayersList scores={scores} />
      </div>
      <div className="col-span-5">
        <ChessBoard initialFen={fen} onMove={onMove} key={fails} />
      </div>
      <div className="col-span-3">
        <MovesList moves={movesHistory} />
      </div>
    </div>
  );
}

export default Game;
