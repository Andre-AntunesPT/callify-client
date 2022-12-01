import React from "react";
import "../intro.css";
import VideoBG from "../components/VideoBG";

function Home() {
  return (
    <>
      <div className="welcome" id="welcome-overlay">
        <span id="splash-overlay" className="splash"></span>
        <span id="welcome" className="z-depth-4"></span>
      </div>
      <div className="HomePage">
        <VideoBG />
      </div>
    </>
  );
}

export default Home;
