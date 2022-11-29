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
      <div className="HomePage">
        <Hero
          title="Callify"
          description="Simple way to make videocalls. No downloads, just a link."
          bntLink="/events"
          btnClass="button-87"
          btnTitle="Discover More"
        />
      </div>
    </>
  );
}

export default Home;
