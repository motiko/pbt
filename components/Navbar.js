import Link from "next/link";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="#">
          <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-3 text-xl">Puzzle Battle</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <span className="mr-5 hover:text-white">
            <Link href="/game/new">New Game</Link>
          </span>
          <span className="mr-5 hover:text-white">
            {" "}
            <Link href="#">Scoreboard</Link>
          </span>
          <span className="mr-5 hover:text-white">
            <Link href="#">Game History</Link>
          </span>
        </nav>
        <Link href="/login">
          <a className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
