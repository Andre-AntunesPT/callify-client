import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./contexts/auth.context";
import gsap from "gsap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const introTl = gsap.timeline();

function init() {
  introTl.to(".loader__text span", { autoAlpha: 1 });
  introTl.from(".loader__text span", {
    yPercent: 150,
    stagger: 0.125,
    duration: 0.325,
    ease: "Power3.inOut",
  });
  introTl.to(
    ".loader__text span",
    { yPercent: 150, stagger: 0.125, duration: 0.325, ease: "Power3.inOut" },
    "+=.9"
  );
  introTl.to(
    ".loader__slice",
    { yPercent: 100, stagger: 0.125, duration: 0.6, ease: "Power3.inOut" },
    "<.125"
  );
  introTl.from(
    ".hero__title span",
    { yPercent: -100, duration: 0.6, ease: "Power3.inOut" },
    "<.4.5"
  );
  introTl.from(
    ".loader",
    { yPercent: -100, duration: 1, display: "block" },
    "<.4.5"
  );
  introTl.from(
    ".hero",
    { yPercent: -100, duration: 1, display: "block" },
    "<.4.5"
  );
}

window.addEventListener("load", function () {
  init();
});
