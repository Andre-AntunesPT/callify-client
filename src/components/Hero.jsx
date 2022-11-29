import React from "react";
import Home from "../pages/Home";

function Hero() {
  return (
    <main>
      <div className="hero-image">
        <div className="hero-text">
          {<Home /> && <h1>Callify</h1>}
          <p>Simple way to make videocalls. No downloads, just a link.</p>
          <button className="button-87">Discover More</button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
