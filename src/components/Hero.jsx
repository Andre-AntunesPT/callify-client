import React from "react";
import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from "react-router-hash-link";

function Hero(props) {
  return (
    <main>
      <div className="hero-image">
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <LinkAnchor to={props.btnLink} smooth>
            <button className={props.btnClass} hidden>
              {props.btnTitle}
            </button>
          </LinkAnchor>
        </div>
      </div>
    </main>
  );
}

export default Hero;
