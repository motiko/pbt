function Move({ notation }) {
  return <div>{notation}</div>;
}

function MovesList({ moves, firstColor }) {
  const movesArr = moves.split(" ");
  console.log(movesArr);
  return (
    <div className="">
      {movesArr.map((m) => (
        <Move notation={m} />
      ))}
    </div>
  );
}

export default MovesList;
