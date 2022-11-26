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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/">My Rooms</Link>
            </li>
            {loggedIn && (
              <li>
                <Link to="/rooms" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
            {!loggedIn && (
              <li>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li className="small">
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
              {loggedIn && <Link to="/profile">Hey there {user.username}</Link>}
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
