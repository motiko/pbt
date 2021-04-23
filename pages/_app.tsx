import "../styles/globals.css";
import "../configureAmplify";
import Link from "next/link";
import "react-chessground/dist/styles/chessground.css";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark">
      <Navbar />
      <main className="dark:border-black dark:bg-gray-700 dark:text-gray-50 ">
        <section className="dark:bg-gray-900">
          <Component {...pageProps} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
