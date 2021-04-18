import { API } from "aws-amplify";
import { useRouter } from "next/router";
// import { createBattle } from "../../src/graphql/mutations";

function NewGame() {
  const router = useRouter();
  async function newGame() {
    console.log("new");
    // const battle = await API.graphql({
      // query: createBattle,
    // });
    // console.log(battle);
    // router.push(`/game/${battle.id}`);
  }
  return (
    <form>
      <div className="flex flex-col">
        <label for="difficulty">Difficulty</label>
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
