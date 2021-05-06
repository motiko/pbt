import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import "../styles/chessground.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Puzzle Battle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden dark">
        <div className="flex-none">
          <Navbar />
        </div>
        <div className="flex justify-center flex-grow bg-gray-600 ">
          <Component {...pageProps} />
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
