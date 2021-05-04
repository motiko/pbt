function PlayerName({ name }) {
  return <div>{name}</div>;
}
function PlayersList({ scores }) {
  return (
    <div className="p-8 text-sm font-bold text-gray-600 bg-gray-300 rounded-lg shadow-lg grid-cols-2 grid gap-1 place-items-center">
      {Object.entries(scores).map(([player, score], i) => (
        <>
          <div>{player}</div>
          <div>{score}</div>
        </>
      ))}
    </div>
  );
}

export default PlayersList;
