import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  /* We need to call the function in a specific moment */
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="EventsListPage">
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
