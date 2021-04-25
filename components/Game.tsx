import React, { useEffect, useRef, useState } from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import * as ChessJS from "chess.js";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

function Game({ initialFen, initialMove, puzzleId }) {
  const chess: any = useRef(new Chess(initialFen));
  const [fen, setFen] = useState(initialFen);
  const [lastMove, setLastMove] = useState(initialMove);

  useEffect(() => {
    const moveRes = chess.current.move(initialMove, { sloppy: true });
    setLastMove(initialMove);
    setFen(chess.current.fen());
  }, []);

  const getMovableDests = () => {
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
      console.log(chess.current.ascii());
      const moves = chess.current.history({ verbose: true });
      console.log(moves);
      const sanMoves = moves
        .filter((_, i) => i > 0)
        .map((m) => `${m.from}${m.to}`)
        .join(",");
      const response = await fetch(
        `/api/puzzle/validateMove?moves=${sanMoves}&puzzleId=${puzzleId}`
      );
      if (response.ok) {
        const result = await response.json();
        if (result.valid) {
          const moveRes = chess.current.move(result.nextMove, { sloppy: true });
          console.log(userMove, moveRes);
          setFen(chess.current.fen());
          setLastMove([moveRes.from, moveRes.to]);
        } else {
          const moveRes = chess.current.undo();
          console.log(chess.current.ascii());
          setFen(chess.current.fen());
          setLastMove([moveRes.from, moveRes.to]);
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
        animation={{
          enabled: true,
          duration: 500,
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
