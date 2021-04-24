import React from "react";
import Chessground from "react-chessground";
import MovesList from "./MovesList";
import PlayersList from "./PlayersList";

function Game() {
  return (
    <div className="flex items-center justify-center flex-grow space-x-8">
      <div className="h-80 w-80">
        <PlayersList players={["player1", "player2", "guest0"]} />
      </div>
      <div className="w-80 h-80 ">
        <Chessground />
      </div>
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
