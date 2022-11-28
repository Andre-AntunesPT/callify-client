import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateRoom from "../components/CreateRoom";

import Hero from "../components/Hero";
import Flipbox from "../components/Flipbox";
import CountUp from "react-countup";

function Events() {
  /* declare the state */
  const [events, setEvents] = useState([]);

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

      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const numberCounter = 100;

  return (
    <div className="EventsListPage">
      <div className="teste">
        <Hero h1="ewfjknwef" />
      </div>
      <CreateRoom refreshRoom={getEvents} />
      <Flipbox />

      <CountUp className="Count" end={numberCounter} />
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event._id} className="EventCard card">
            <Link to={`/events/${event._id}`}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
