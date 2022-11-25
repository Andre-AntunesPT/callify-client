import "./App.css";
import "./intro.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Anon from "./components/Anon";
import Profile from "./pages/Profile";
import Private from "./components/Private";


function App() {
  return (
    <div className="App">
      <section class="loader">
        <span class="loader__text">
          <span>Developer,</span>
        </span>
        <span class="loader__text">
          <span>designer</span>
        </span>
        <span class="loader__text">
          <span>& runner.</span>
        </span>
        <div class="loader__slice"></div>
        <div class="loader__slice"></div>
        <div class="loader__slice"></div>
      </section>
      <section class="hero">
        <h1 class="hero__title">
          <span>Hi, there.</span>
        </h1>
      </section>
      <Navbar />
      <div className="Wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

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
