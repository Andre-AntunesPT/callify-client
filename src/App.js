import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Rooms from "./pages/Rooms";
import EventDetails from "./pages/EventDetails";
import RoomDetails from "./pages/RoomDetails";
import UpdateRooms from "./pages/UpdateRooms";
import Spinner from "./components/Spinner";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Anon from "./components/Anon";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";


import Private from "./components/Private";

function App() {
  const [loading, setLoading] = useState(true);
  if (window.location.pathname === "/") {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  } else {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <Navbar />

        <div className="Wrapper" id="WrapperCallify">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/rooms"
              element={
                <Private>
                  <Rooms />
                </Private>
              }
            />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/rooms/edit/:id" element={<UpdateRooms />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit/:id" element={<UpdateProfile />} />
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
}

export default App;
