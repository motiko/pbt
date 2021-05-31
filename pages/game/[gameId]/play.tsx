import Game, { GameProps } from "@/components/Game";
import React, { useEffect, useState } from "react";
import { Replicache } from "replicache";

const GamePage = (props: GameProps): JSX.Element => {
  const [rep, setRep] = useState(null);
  useEffect(() => {
    const rep = new Replicache({
      pushURL: "/api/replicache-push",
      pullURL: "/api/replicache-pull",
      // The .dev.wasm version is nice during development because it has
      // symbols and additional debugging info. The .wasm version is smaller
      // and faster.
      wasmModule: "/replicache.dev.wasm",
      mutators: {
        async createMove(tx, { id, from, to, order }) {
          await tx.put(`move/${id}`, {
            from,
            to,
            order,
          });
        },
      },
    });
    listen(rep);
    setRep(rep);
  }, []);
  return rep && <Game {...props} rep={rep} />;
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

function listen(rep: Replicache<{}>) {
  // throw new Error("Function not implemented.");
}
