import { useState, useEffect } from "react";
import axios from "axios";

import FlipboxCollection from "../components/FlipboxCollection";
import Hero from "../components/Hero";

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

  return (
    <div className="CollectionListPage">
      <div className="CollectionPage">
        <Hero title="My Collection" description="Check out your collection" />
      </div>
      <div className="CollectionCards">
        <div id="all-events">
          <FlipboxCollection />
        </div>
      </div>
    </div>
  );
}

export default Events;
