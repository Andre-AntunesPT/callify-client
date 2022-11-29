import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <main>
      <div className="hero-image">
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to={props.btnLink}>
            <button className={props.btnClass} hidden>
              {props.btnTitle}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
