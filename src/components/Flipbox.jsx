import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Flipbox() {
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

  return (
    <>
      <div className="centerflipcards">
        {events.map((event) => {
          return (
            <div class="square-flip">
              <div className="square">
                <div className="square-container">
                  <h2 className="textshadow">{event.title}</h2>
                  <h3 className="textshadow">{event.description}</h3>
                  <img
                    src="/assets/images/right-arrow_callify.png"
                    alt="Callify - Arrow"
                    className="FlipArrow"
                  />
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Create {event.title}</h2>
                  <a href={`/events/${event._id}`}>
                    <button className="button-89">Create a Room</button>
                  </a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Flipbox;
