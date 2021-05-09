import { Scores } from "@/types";

function PlayersList({ scores }: { scores: Scores }): JSX.Element {
  return (
    <div className="p-8 text-sm font-bold text-gray-600 bg-gray-300 rounded-lg shadow-lg grid-cols-2 grid gap-1 place-items-center">
      {Object.entries(scores).map(([player, score]) => (
        <>
          <div>{player}</div>
          <div>{score}</div>
        </>
      ))}
    </div>
  );
}

export default PlayersList;
