import JoinGameDialog from "@/components/JoinGameDialog";

const JoinGamePage = (props) => {
  return <JoinGameDialog {...props} />;
};

export default JoinGamePage;

export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: { id: query.gameId },
  };
}
