import React, { useEffect, useRef, useState } from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import * as ChessJS from "chess.js";
import { getFirebase } from "@/utils/firebaseConfig";
import { ascii, movableDests, playMoves, sideToMove } from "@/utils/chess";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

function Game({ id }) {
  const [fen, setFen] = useState("");
  const [lastMove, setLastMove] = useState([]);
  const [movesHistory, setMovesHistory] = useState([]);
  const [puzzleId, setPuzzleId] = useState("");

  useEffect(() => {
    const db = getFirebase().database();
    const gameRef = db.ref(`games/${id}`);
    gameRef.on("value", (snapshot) => {
      const game = snapshot.val();
      setFen(game.fen);
      console.log("game.moves: ", game.moves);
      setMovesHistory(game.moves || []);
      setPuzzleId(game.currentPuzzle.id);
    });
  }, []);

  const onMove = async (from, to) => {
    console.log(from, to);
    console.log("movesHistory:", movesHistory);

    try {
      const response = await fetch(
        `/api/puzzle/validateMove?moves=${[
          ...movesHistory,
          `${from}${to}`,
        ]}&puzzleId=${puzzleId}&gameId=${id}`
      );
      if (response.ok) {
        const result = await response.json();
        if (result.valid) {
          console.log(result);
          if (result.win) {
            const { currentPuzzle } = result;
            setPuzzleId(currentPuzzle.id);
            setMovesHistory([]);
            setFen(currentPuzzle.initialFen);
          }
        } else {
          console.log(ascii(fen));
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
    <div className="flex items-center justify-center flex-grow space-x-8">
      <div style={{ width: "35vw", height: "35vw" }}>
        <PlayersList players={["player1", "player2", "guest0"]} />
      </div>
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
      <div className="hidden w-80 h-80">
        <MovesList
          moves={"e2e4 c7c5 g1f3 e7e6 d2d4 c5d4"}
          firstColor={"white"}
        />
      </div>
    </div>
  );
}

export default Game;
