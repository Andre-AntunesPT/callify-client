import { React, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <header tabIndex="0" id="HeaderLogo">
      <a href="/">
        <img
          src="/assets/images/logo-callify_white.png"
          alt="Callify - Logo"
          className="logo-callify"
        />
      </a>
      {loggedIn && (
        <a href="/profile">
          <img
            src="/assets/images/user-callify.png"
            alt="Callify - Logo"
            className="profile-icon"
          />
        </a>
      )}
      {!loggedIn && (
        <a href="/login">
          <img
            src="/assets/images/user-callify.png"
            alt="Callify - Logo"
            className="profile-icon"
          />
        </a>
      )}
    </header>
  );
}

export default Navbar;
