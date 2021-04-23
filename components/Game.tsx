import React from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";

function Game() {
  return (
    <div className="flex p-4">
      <div className="w-64 p-8 text-sm font-bold text-gray-600 bg-gray-300 rounded-lg shadow-lg">
        <PlayersList players={["player1", "player2", "guest0"]} />
      </div>
      <div className="w-64 h-64">
        <Chessground />
      </div>
      <div className="w-32 p-8">
        <MovesList
          moves={"e2e4 c7c5 g1f3 e7e6 d2d4 c5d4"}
          firstColor={"white"}
        />
      </div>
    </div>
  );
}

export default Game;
