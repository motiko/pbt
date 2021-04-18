import Link from "next/link";

function Header({ Component, pageProps }) {
  return (
    <nav className="flex p-3 dark:bg-gray-800 dark:text-gray-400 ">
      <Link href="/">
        <span className="ml-3 mr-6 cursor-pointer hover:text-gray-50">
          Home
        </span>
      </Link>
      <Link href="/create-post">
        <span className="mr-6 cursor-pointer hover:text-gray-50">New Game</span>
      </Link>
      <Link href="/profile">
        <span className="mr-6 cursor-pointer hover:text-gray-50">
          Leaderboard
        </span>
      </Link>
      <Link href="/profile">
        <span className="mr-6 cursor-pointer hover:text-gray-50">Profile</span>
      </Link>
      <Link href="/profile">
        <span className="mr-6 cursor-pointer hover:text-gray-50">Login</span>
      </Link>
    </nav>
  );
}

export default Header;
