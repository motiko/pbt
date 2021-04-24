function Move({ notation }) {
  return <div>{notation}</div>;
}

function MovesList({ moves, firstColor }) {
  const movesArr = moves.split(" ");
  return (
    <div className="p-8 bg-gray-300 rounded-lg shadow-lg">
      {movesArr.map((m) => (
        <Move notation={m} />
      ))}
    </div>
  );
}

export default MovesList;
