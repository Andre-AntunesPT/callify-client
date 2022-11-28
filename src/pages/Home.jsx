import React from "react";
import "../intro.css";

function Home() {
  return (
    <>
      <div className="welcome" id="welcome-overlay">
        <span id="splash-overlay" className="splash"></span>
        <span id="welcome" className="z-depth-4"></span>
      </div>
      <main>
        <div className="hero-image hero-home">
          <div className="hero-text">
            <h1>Callify</h1>
            <p>Simple way to connect with anyone. No downloads, just a link.</p>
            <button className="button-87">Discover More</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
