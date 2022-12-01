import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateRoom from "../components/CreateRoom";
import ToggleSection from "../components/ToggleSection";
import Collapsed from "../components/Collapsed";
import ImageCard from "../components/ImageCard";
import EventCard from "../components/EventCard";
import Login from "../components/Login";
import { AuthContext } from "../contexts/auth.context";
import ImageComparison from "../components/ImageComparison";

import Hero from "../components/Hero";

function EventDetails() {
  /* Apesar de ser um objecto coloca-se null senão vai ler como undefined */
  const [event, setEvent] = useState(null);
  //const [rooms, setRoom] = useState(null);
  const { loggedIn } = useContext(AuthContext);

  const { id } = useParams();

  const getEvents = async () => {
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setEvent(response.data);
      //setRoom(response.data);
      console.log(response.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  /* We need to call the function in a specific moment */
  useEffect(() => {
    getEvents();
    /* If we were able to go from one details view straight to another we should pass id on the dependency array below, so that everytime the component rerenders we get the information from the correct/latest id */
  }, []);

  return (
    <div className="EventDetails">
      <div className="SingleEventPage">
        <Hero
          title={event && event.title}
          description={event && event.description}
        />
      </div>
      <div className="TranslateSection">
        <EventCard
          h1={event && event.title}
          pTitle={event && event.description}
          p={event && event.description}
          li1={event && event.title}
          li2={event && event.title}
          li3={event && event.title}
          li4={event && event.title}
          li5={event && event.title}
          link="#CreateRoomSection"
        />
        <div className="SectionsEvents">
          <ToggleSection
            title="Lorem Ipsum"
            title1="Lorem Ipsum"
            description1="Loresm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
            title2="Lorem Ipsum"
            description2="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
            title3="Lorem Ipsum"
            description3="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          />
          <ImageCard />
        </div>
        <Collapsed />
        <div id="CreateRoomSection">
          {loggedIn && (
            /* React Fragment <> </> if we don't want to specify a parent - doesn't add anything to the HTML (only its content)  */
            <>
              <CreateRoom refreshProjects={getEvents} id="teste" />
            </>
          )}
          {!loggedIn && (
            /* React Fragment <> </> if we don't want to specify a parent - doesn't add anything to the HTML (only its content)  */
            <>
              <Login />
            </>
          )}
          {/* <ImageComparison /> */}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
