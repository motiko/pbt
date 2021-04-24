function PlayerName({ name }) {
  return <div>{name}</div>;
}
function PlayersList({ players }) {
  return (
    <div className="p-8 text-sm font-bold text-gray-600 bg-gray-300 rounded-lg shadow-lg ">
      {players.map((p) => (
        <PlayerName name={p} />
      ))}
    </div>
  );
}

export default PlayersList;
