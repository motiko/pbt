import Link from "next/link";

function Login(): JSX.Element {
  return (
    <div className="container h-full px-4 mx-auto">
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
            <div className="px-6 py-6 mb-0 rounded-t">
              <div className="mb-3 text-center">
                <h6 className="text-sm font-bold text-gray-600">
                  Sign in with
                </h6>
              </div>
              <div className="text-center btn-wrapper">
                <button
                  className="inline-flex items-center px-4 py-2 mb-1 mr-2 text-xs font-normal font-bold text-gray-800 uppercase bg-white rounded shadow outline-none active:bg-gray-100 focus:outline-none hover:shadow-md"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img alt="..." className="w-5 mr-1" src={"/github.svg"} />
                  Github
                </button>
                <button
                  className="inline-flex items-center px-4 py-2 mb-1 mr-1 text-xs font-normal font-bold text-gray-800 uppercase bg-white rounded shadow outline-none active:bg-gray-100 focus:outline-none hover:shadow-md"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img alt="..." className="w-5 mr-1" src={"/google.svg"} />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-gray-400 border-b-1" />
            </div>
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <div className="mb-3 font-bold text-center text-gray-500">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="Password"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="w-5 h-5 ml-1 text-gray-800 border-0 rounded form-checkbox"
                      style={{ transition: "all .15s ease" }}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center text-gray-700">
                {" "}
                <Link href="#"> Create account </Link>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300"
              >
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300"
              >
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
