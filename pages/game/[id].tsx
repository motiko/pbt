import Game from "../../components/Game";
import rtdb from "../../db";

const GamePage = (props) => {
  return <Game {...props} />;
};

export default GamePage;

export async function getServerSideProps(context) {
  // console.log(context);
  const { query } = context;
  console.log(query);
  const snapshot = await rtdb.ref(`games/${query.id}`).get();
  console.log(snapshot);
  const game = await snapshot.val();
  const puzzle = game.currentPuzzle;
  console.log(game);
  return {
    props: {
      initialFen: puzzle.fen,
      initialMove: puzzle.initialMove,
    },
  };
}
