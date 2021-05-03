function Move({ notation }) {
  return <div>{notation}</div>;
}

function MovesList({ moves, firstColor }) {
  return (
    <div className="px-3 py-4 bg-gray-300 rounded-lg shadow-lg grid-cols-2 grid gap-1 place-items-center">
      {moves.map((m, i) => (
        <Move notation={m} key={i} />
      ))}
    </div>
  );
}

export default MovesList;
