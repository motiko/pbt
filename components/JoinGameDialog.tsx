import { joinGame } from "@/lib/fetch";
import { useRouter } from "next/router";
import { useState } from "react";

function JoinGameDialog({ id }: { id: string }): JSX.Element {
  const router = useRouter();
  const [name, setName] = useState("");
  async function onJoin() {
    try {
      sessionStorage.setItem("name", name);
      const join = await joinGame(id, name);
      if (join) {
        router.push({
          pathname: `/game/${id}/play`,
        });
      }
    } catch (e) {
      console.error("Server error: ", e);
    }
  }
  return (
    <div className="container flex-grow px-4 mx-auto">
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg relati ve">
            <div className="px-6 py-6 mb-0 rounded-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onJoin();
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
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                    onClick={onJoin}
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

export default JoinGameDialog;
