import JoinGameDialog from "@/components/JoinGameDialog";

const JoinGamePage = (props: { id: string }): JSX.Element => {
  return <JoinGameDialog {...props} />;
};

export default JoinGamePage;

export async function getServerSideProps(context: {
  query: { gameId: string };
}): Promise<{ props: { id: string } }> {
  const { query } = context;
  return {
    props: { id: query.gameId },
  };
}
