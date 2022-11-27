import React from "react";

function Navbar() {
  return (
    <header tabindex="0" id="HeaderLogo">
      <a href="/">
        <img
          src="/assets/images/logo-callify_white.png"
          alt="Callify - Logo"
          className="logo-callify"
        />
      </a>
    </header>
  );
}

export default Navbar;
