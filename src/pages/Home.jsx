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
        <h1>Home</h1>
      </main>
    </>
  );
}

export default Home;
