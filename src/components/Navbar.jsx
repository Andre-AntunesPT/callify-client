import { Link } from "react-router-dom";
import {useContext} from 'react';
import {AuthContext} from '../contexts/auth.context';

function Navbar() {
  const {loggedIn, user, logout} = useContext(AuthContext);
  return (
    <>
      <input type="checkbox" id="navigation" />
      <label for="navigation" id="navigation-label">
        +
      </label>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Events</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>

        {loggedIn && (
        <> 
        <Link to="/projects">
        <button>Projects</button>
        <button onClick={logout}>Logout</button>
        <h3>hey there {user.email}</h3>
      </Link> 
      </>
      )}

      {!loggedIn && (
        <>
          <Link to='/signup'>
          <button>Signup</button>
          </Link>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </>
      )}
      </nav>
    </>
  );
}

export default Navbar;
