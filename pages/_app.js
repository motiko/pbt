import "../styles/globals.css";
import "../configureAmplify";
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark min-h-screen flex flex-col">
      <nav className="flex p-3 dark:bg-gray-800 dark:text-gray-400 ">
        <Link href="/">
          <span className="ml-3 mr-6 cursor-pointer hover:text-gray-50">
            Home
          </span>
        </Link>
        <Link href="/create-post">
          <span className="mr-6 cursor-pointer hover:text-gray-50">
            New Game
          </span>
        </Link>
        <Link href="/profile">
          <span className="mr-6 cursor-pointer hover:text-gray-50">
            Leaderboard
          </span>
        </Link>
        <Link href="/profile">
          <span className="mr-6 cursor-pointer hover:text-gray-50">
            Profile
          </span>
        </Link>
        <Link href="/profile">
          <span className="mr-6 cursor-pointer hover:text-gray-50">Login</span>
        </Link>
      </nav>
      <main className="py-8 px-16 dark:border-black  dark:bg-gray-700 dark:text-gray-50">
        <Component {...pageProps} />
      </main>
        <footer className="flex-grow dark:bg-gray-700">
          </footer>
    </div>
  );
}

export default MyApp;
