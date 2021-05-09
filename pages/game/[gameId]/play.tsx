import Game, { GameProps } from "@/components/Game";

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
  return {
    props: {
      id: query.gameId,
    },
  };
}
