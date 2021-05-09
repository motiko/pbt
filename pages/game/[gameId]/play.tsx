import Game, { GameProps } from "@/components/Game";
import { rtdb } from "@/dal/realtime-db";

const GamePage = (props: GameProps): JSX.Element => {
  return <Game {...props} />;
};

export default GamePage;

type Query = {
  gameId: string;
};
type Context = {
  query: Query;
};

export async function getServerSideProps(
  context: Context
): Promise<{ props: GameProps }> {
  const { query } = context;
  const snapshot = await rtdb().ref(`games/${query.gameId}`).get();
  const game = await snapshot.val();
  const puzzle = game.currentPuzzle;
  console.log(puzzle);
  return {
    props: {
      id: query.gameId,
    },
  };
}
