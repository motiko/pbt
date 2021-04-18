import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { createBattle } from "../../src/graphql/mutations";
import { v4 as uuid } from "uuid";

function NewGame() {
  const router = useRouter();
  async function newGame() {
    console.log("new");
    console.log(id);
    const data = await API.graphql({
      query: createBattle,
      variables: {
        input: { puzzleId: "533d5d38-80fe-4d7d-8e7a-2cb06af8277a" },
      },
    });
    console.log(data);
    const id = data.data.createBattle.id;
    router.push(`/game/${id}`);
  }
  return (
    <form>
      <div className="flex flex-col">
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="button" onClick={newGame}>
          Start
        </button>
      </div>
    </form>
  );
}

export default NewGame;
