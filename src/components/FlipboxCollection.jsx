import { React, useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FlipboxCollection() {
  /* declare the state */
  const [events, setEvents] = useState([]);

  const { user } = useContext(AuthContext);
  

  /* function to call the API */
  const getEvents = async () => {
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      let filteredRooms = response.data.events.rooms.filter((room) => room.user === user._id);

      console.log(response.data.events);

      setEvents(filteredRooms);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className="FlipboxCollection">
        {events.map((event) => {
          return (
            <div className="EventCard card">
              <img src="/assets/images/phone-call.png" alt="Phone" />
              <h1>
                <small>
                  <span>{event.rooms.length}</span> Rooms Created
                </small>
              </h1>
              <h1>{event.title}</h1>
              
              <p>
                <a href={`/events/${event._id}`}>
                  <button className="button-89">View your rooms</button>
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FlipboxCollection;
