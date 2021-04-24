import Game from "../../components/Game";

const GamePage = (props) => {
  return <Game {...props} />;
};

export default GamePage;

export async function getServerSideProps(context) {
  // console.log(context);
  const { query } = context;
  // console.log(query);
  return { props: { fen: query.fen, initialMove: query.initialMove } };
}
