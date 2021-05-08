import { useRouter } from "next/router";
import { useState } from "react";

function NewGameDialog() {
  const router = useRouter();
  const [name, setName] = useState("");
  async function newGame() {
    sessionStorage.setItem("name", name);
    try {
      const response = await (
        await fetch("/api/game/new", {
          method: "POST",
          body: JSON.stringify({ name }),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      console.log(response);
      if (response.error) {
        console.error("Server Error: ", response.error);
      } else {
        router.push({
          pathname: `/game/${response.key}/play`,
        });
      }
    } catch (e) {
      console.error("Network error: ", e);
    }
  }
  return (
    <div className="container flex-grow px-4 mx-auto">
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
            <div className="px-6 py-6 mb-0 rounded-t">
              <form
                onSubmit={(e) => {
                  newGame();
                  e.preventDefault();
                }}
              >
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="difficulty"
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  >
                    Name
                  </label>
                  <div className="pt-0 mb-3">
                    <input
                      type="text"
                      placeholder="Guest"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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

export default NewGameDialog;
