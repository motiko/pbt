import React, { useEffect, useRef, useState } from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import * as ChessJS from "chess.js";
import { getFirebase } from "@/utils/firebaseConfig";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

function Game({ id, initialMove, initialFen }) {
  const chess: any = useRef(new Chess());
  const [fen, setFen] = useState("");
  const [lastMove, setLastMove] = useState([]);
  const [movesHistory, setMovesHistory] = useState([]);
  const [puzzleId, setPuzzleId] = useState("");

  function move(uciMove) {
    console.log("move:", uciMove);
    const moveObj = chess.current.move(uciMove, { sloppy: true });
    setFen(chess.current.fen());
    setLastMove([moveObj.from, moveObj.to]);
  }

  useEffect(() => {
    chess.current.load(initialFen);
    setFen(chess.current.fen());
    move(initialMove);
    const db = getFirebase().database();
    const gameRef = db.ref(`games/${id}`);
    gameRef.on("value", (snapshot) => {
      const game = snapshot.val();
      setPuzzleId(game.currentPuzzle.id);
      if (
        JSON.stringify(movesHistory) !== JSON.stringify(game.moves) &&
        game.moves.length > 1
      ) {
        chess.current.load(game.fen);
        setMovesHistory(game.moves);
        setFen(game.fen);
      }
    });
  }, []);

  const getMovableDests = () => {
    if (!chess.current) return null;
    const dests = new Map();
    chess.current.SQUARES.forEach((s) => {
      const ms = chess.current.moves({ square: s, verbose: true });
      if (ms.length)
        dests.set(
          s,
          ms.map((m) => m.to)
        );
    });
    return dests;
  };

  const onMove = async (from, to) => {
    console.log(from, to);
    try {
      const userMove = chess.current.move({ from, to });
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
        } else {
          const moveRes = chess.current.undo();
          setFen(chess.current.fen());
          setLastMove([from, to]);
          setMovesHistory(movesHistory);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const sideToMove = () => {
    return chess.current.turn() === "w" ? "white" : "black";
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
          dests: getMovableDests(),
          color: sideToMove(),
          showDests: true,
        }}
        turnColor={sideToMove()}
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
