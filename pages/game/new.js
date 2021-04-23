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
    <div className="container h-full px-4 mx-auto">
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
            <div className="px-6 py-6 mb-0 rounded-t">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="difficulty"
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  >
                    Name
                  </label>
                  <div class="mb-3 pt-0">
                    <input
                      type="text"
                      placeholder="Guest"
                      class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <label
                    htmlFor="difficulty"
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  >
                    Difficulty
                  </label>
                  <select
                    id="difficulty"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={newGame}
                  >
                    Start
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
