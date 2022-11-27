import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Rooms from "./pages/Rooms";
import EventDetails from "./pages/EventDetails";
import RoomDetails from "./pages/RoomDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Anon from "./components/Anon";
import Profile from "./pages/Profile";
import Private from "./components/Private";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/signup"
            element={
              <Anon>
                <Signup />
              </Anon>
            }
          />
          <Route
            path="/login"
            element={
              <Anon>
                <Login />
              </Anon>
            }
          />
        </Routes>
      </div>
      <div className="WrapperBackground"></div>
    </div>
  );
}

export default App;
