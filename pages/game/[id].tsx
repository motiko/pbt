import Game from "../../components/Game";
import rtdb from "../../db";

const GamePage = (props) => {
  return <Game {...props} />;
};

export default GamePage;

export async function getServerSideProps(context) {
  const { query } = context;
  const snapshot = await rtdb.ref(`games/${query.id}`).get();
  const game = await snapshot.val();
  const puzzle = game.currentPuzzle;
  return {
    props: {
      initialFen: puzzle.fen,
      initialMove: puzzle.initialMove,
    },
  };
}
