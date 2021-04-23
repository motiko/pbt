import "../styles/globals.css";
import "../configureAmplify";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import "../styles/chessground.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen dark">
      <div className="flex-none">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
