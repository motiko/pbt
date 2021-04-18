import "../styles/globals.css";
import "../configureAmplify";
import Link from "next/link";
import "react-chessground/dist/styles/chessground.css";
import Navbar from "./Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark ">
      <Navbar />
      <main className="py-8 px-16 dark:border-black  dark:bg-gray-700 dark:text-gray-50 ">
        <Component {...pageProps} />
      </main>
      <footer className="dark:bg-gray-700"></footer>
    </div>
  );
}

export default MyApp;
