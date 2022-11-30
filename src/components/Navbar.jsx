import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="nav-button" tabindex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>{loggedIn && <a href="/rooms">My Rooms</a>}</li>
            <li>{loggedIn && <a href="/collection">My Collection</a>}</li>
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
              <a href="/">Home</a>
              <a href="/">Home</a>
              {loggedIn && <a href="/profile">Profile</a>}
            </li>
          </ul>
        </div>
      </div>
      {/* <input type="checkbox" id="navigation" />
      <label for="navigation" id="navigation-label">
        +
      </label> */}
      {/* <nav>
      </nav> */}
    </>
  );
}

export default Navbar;
