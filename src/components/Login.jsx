import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { id } = useParams();

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      //try to create the user
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password, username }
      );

      //store the token thet we get from the login request
      storeToken(response.data.authToken);

      //validate the token
      authenticateUser();

      //redirect
      navigate(`/events/${id}`);
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };
  return (
    <div className="LoginPage">
      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <div class="conteudo">
          <div class="meu-box">
            <input
              class="input-nome"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
            />
            <label class="label-nome">Email</label>
          </div>

          <div class="meu-box">
            <input
              class="input-nome"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <label class="label-nome">Password</label>
          </div>

          <button className="button-89" type="submit">
            Login
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <p>Don't have an account yet?</p>
        <Link to="/signup">Signup!</Link>
      </form>
    </div>
  );
}

export default Login;
