import React from "react";
import Home from "../pages/Home";

function Hero() {
  return (
    <main>
      <div className="hero-image hero-home">
        <div className="hero-text">
          {<Home /> && <h1>Callify</h1>}
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          <button className="button-87">Discover More</button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
