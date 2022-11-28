import React from "react";
import "../intro.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <div className="welcome" id="welcome-overlay">
        <span id="splash-overlay" className="splash"></span>
        <span id="welcome" className="z-depth-4"></span>
      </div>
      <div className="teste">
        <Hero h1="ewfjknwef" />
      </div>
    </>
  );
}

export default Home;
