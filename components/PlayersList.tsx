function PlayerName({ name }) {
  return <div>{name}</div>;
}
function PlayersList({ players }) {
  return (
    <div className="">
      {players.map((p) => (
        <PlayerName name={p} />
      ))}
    </div>
  );
}

export default PlayersList;
