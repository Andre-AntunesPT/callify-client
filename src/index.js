import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./intro.css";
import "./flipbox.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./contexts/auth.context";


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

window.onload = function () {
  const welcomeOverlay = document.getElementById("welcome-overlay");
  if (welcomeOverlay) {
    const headerLogo = document.getElementById("HeaderLogo");
    headerLogo.classList.add("home-animation");
    const Wrapper = document.getElementById("WrapperCallify");
    Wrapper.classList.add("home-padding");
  }
  setTimeout(function () {
    document.getElementById("welcome-overlay").style.display = "none";
  }, 3000);
};

document.ready(function ($) {
  //Count nr. of square classes
  const countSquare = $(".square").length;

  //For each Square found add BG image
  // eslint-disable-next-line no-undef
  for (i = 0; i < countSquare; i++) {
    // eslint-disable-next-line no-undef
    const firstImage = document.getElementsByClassName(".square").eq([i]);
    // eslint-disable-next-line no-undef
    const secondImage = document.getElementsByClassName(".square2").eq([i]);

    const getImage = firstImage.attr("data-image");
    const getImage2 = secondImage.attr("data-image");

    firstImage.css("background-image", "url(" + getImage + ")");
    secondImage.css("background-image", "url(" + getImage2 + ")");
  }
});
