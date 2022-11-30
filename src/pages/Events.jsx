import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HashLink as LinkAnchor } from "react-router-hash-link";

import Hero from "../components/Hero";
import Flipbox from "../components/Flipbox";
import CountUp from "react-countup";
import TeamMember from "../components/TeamMember";

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

  /* const numberCounter = events[1].rooms.length; */
  const numberCounter = 100;

  return (
    <div className="EventsListPage">
      <div className="EventsPage">
        <Hero
          title="Events"
          description="Choose the type of event you want to create"
          btnLink="/events#all-events"
          btnClass="button-87"
          btnTitle="Discover More"
        />
      </div>
      <div id="all-events">
        <Flipbox />
      </div>
      <div className="CountSection">
        <p className="CountParagraph">
          <CountUp className="Count" end={numberCounter} duration={3} />
          <sup>+</sup>
        </p>
        <p>Rooms already created</p>
      </div>
      <TeamMember />
      <div className="CTASection">
        <h1 id="his">Create a beautiful room right now!</h1>
        <a href="/signup">
          <button className="button-87">Signup now!</button>
        </a>
      </div>
    </div>
  );
}

export default Events;
