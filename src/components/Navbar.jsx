import { Link } from "react-router-dom";

function Navbar() {
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
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
