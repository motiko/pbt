import React, { useEffect, useState } from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import { getFirebase } from "@/utils/firebaseConfig";
import { movableDests, sideToMove } from "@/utils/chess";
import router from "next/router";

function Game({ id }) {
  const [fen, setFen] = useState("");
  const [lastMove, setLastMove] = useState([]);
  const [movesHistory, setMovesHistory] = useState([]);
  const [puzzleId, setPuzzleId] = useState("");
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const playerName = sessionStorage.getItem("name");
    if (!playerName) {
      router.push({
        pathname: `/game/${id}/join`,
      });
    }
    const db = getFirebase().database();
    const gameRef = db.ref(`games/${id}`);
    gameRef.on("value", (snapshot) => {
      const game = snapshot.val();
      setFen(game.fen);
      setMovesHistory(game.moves || []);
      setPuzzleId(game.currentPuzzle.id);
      setScores(game.scores);
    });
  }, []);

  const onMove = async (from, to) => {
    try {
      const playerName = sessionStorage.getItem("name");
      const response = await fetch(
        `/api/puzzle/validateMove?moves=${[
          ...movesHistory,
          `${from}${to}`,
        ]}&puzzleId=${puzzleId}&gameId=${id}&playerName=${playerName}`
      );
      if (response.ok) {
        const result = await response.json();
        if (!result.valid) {
          setFen(fen);
          setLastMove([from, to]);
          setMovesHistory(movesHistory);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-8 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <PlayersList scores={scores} />
      </div>
      <div className="col-span-5">
        <Chessground
          fen={fen}
          width="35vw"
          height="35vw"
          movable={{
            free: false,
            dests: movableDests(fen),
            color: sideToMove(fen),
            showDests: true,
          }}
          turnColor={sideToMove(fen)}
          lastMove={lastMove}
          animation={{
            enabled: true,
            duration: 100,
          }}
          onMove={onMove}
        />
      </div>
      <div className="col-span-3">
        <MovesList moves={movesHistory} firstColor={"white"} />
      </div>
    </div>
  );
}

export default Game;
