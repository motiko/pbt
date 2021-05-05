import rtdb from "@/utils/firbase-admin";
import { getFirebase } from "@/utils/firebaseConfig";
import { useEffect, useState } from "react";

function GameCard({ game }) {
  return (
    <div>
      Players: {game.players?.length}
      <a href={`/game/${game.key}/join`}>Join game</a>
    </div>
  );
}

function GamesList({ q }) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const db = getFirebase().database();
    var gamesRef = db.ref("games").limitToLast(20);
    gamesRef.on("child_added", (data) => {
      const val = data.val();
      console.log(data.key, val);
      setGames((prevGames) => [...prevGames, { ...val, key: data.key }]);
    });

    gamesRef.on("child_changed", (data) => {
      // console.log(data);
    });

    gamesRef.on("child_removed", (data) => {
      // console.log(data);
    });
    return () => gamesRef.off();
  }, []);
  return (
    <div className="p-8 text-sm font-bold text-gray-600 bg-gray-300 rounded-lg shadow-lg">
      {games.map((game, i) => (
        <GameCard game={game} />
      ))}
    </div>
  );
}

export default GamesList;
