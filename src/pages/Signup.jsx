import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        email,
        password,
        username,
        company,
      });

      //redirect
      navigate("/login");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="SignupPage">
      <form onSubmit={handleSignupSubmit}>
        <h1>Signup</h1>
        <div class="conteudo">
          <div class="meu-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
            />
            <label>Email</label>
          </div>

          <div class="meu-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <div class="meu-box">
            <input
              type="username"
              name="username"
              value={username}
              onChange={handleUsername}
              placeholder="Username"
            />
            <label>Username</label>
          </div>
          <div class="meu-box">
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleCompany}
              placeholder="Company"
            />
            <label>Company</label>
          </div>

          <button className="button-89" type="submit">
            Sign Up
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Signup;
