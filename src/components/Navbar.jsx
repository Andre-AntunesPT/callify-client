import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabindex="0">
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="small">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
      {/* <input type="checkbox" id="navigation" />
      <label for="navigation" id="navigation-label">
        +
      </label> */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Profile</Link>
        <Link to="/">Home</Link>

        {loggedIn && (
          <>
            <Link to="/rooms">
              <button>Rooms</button>
              <button onClick={logout}>Logout</button>
              <h3>hey there {user.username}</h3>
            </Link>
          </>
        )}

        {!loggedIn && (
          <>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </nav> */}
    </>
  );
}

export default Navbar;
