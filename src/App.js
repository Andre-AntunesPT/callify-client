import "./App.css";
import "./intro.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Login />
      </div>
      <div className="WrapperBackground"></div>
    </div>
  );
}

export default App;
