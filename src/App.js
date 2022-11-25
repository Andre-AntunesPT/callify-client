import "./App.css";
import "./intro.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Anon from "./components/Anon";
import Private from "./components/Private";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Wrapper">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" 
        element={
        <Anon>
          <Signup/>
        </Anon>} />
        
        
        <Route path="/login" 
        element={
        <Anon>
          <Login/>
        </Anon>} />

          
        </Routes>

        
      </div>
      <div className="WrapperBackground"></div>
    </div>
  );
}

export default App;
