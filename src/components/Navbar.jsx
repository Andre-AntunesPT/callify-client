import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="nav-button" tabIndex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>{loggedIn && <a href="/rooms">Rooms</a>}</li>
            <li>{loggedIn && <a href="/collection">Collection</a>}</li>
            {loggedIn && (
              <li>
                <a href="/rooms" onClick={logout}>
                  Logout
                </a>
              </li>
            )}
            {!loggedIn && (
              <li>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
              </li>
            )}
            <li className="small">
              <a href="/">
                <img
                  src="/assets/images/logo-callify_white.png"
                  alt="Callify - Logo"
                  className="logo-callify-menu"
                />
              </a>
              {loggedIn && (
                <a href="/profile">
                  <img
                    src="/assets/images/user-callify.png"
                    alt="Callify - Logo"
                    className="profile-icon-menu"
                  />
                </a>
              )}
              {!loggedIn && (
                <a href="/login">
                  <img
                    src="/assets/images/user-callify.png"
                    alt="Callify - Logo"
                    className="profile-icon-menu"
                  />
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
