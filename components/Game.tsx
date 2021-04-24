import React, { useEffect, useRef, useState } from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";
import * as ChessJS from "chess.js";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

function Game({ initialFen, initialMove }) {
  const chess: any = useRef(new Chess(initialFen));
  const [fen, setFen] = useState(initialFen);
  // debugger
  const [lastMove, setLastMove] = useState(initialMove);

  useEffect(() => {
    console.log(chess.current.fen());
    console.log(initialMove);
    const moveRes = chess.current.move(initialMove, { sloppy: true });
    console.log(moveRes);
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
  const onMove = () => {};
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
          free: true,
          dests: getMovableDests(),
          color: sideToMove(),
          showDests: true,
        }}
        animation={{
          enabled: true,
          duration: 500,
        }}
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
