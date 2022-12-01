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
      console.log(response.data);
      console.log(response.data.title);
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
        {/* Webinar - Não apagar ID */}
        {id === "63864304b5461f5ed5d8320e" && (
          <EventCard
            h1={event && event.title}
            pTitle={event && event.description}
            p="Webinar configurations"
            li1="Youtube Integration"
            li2="Settings buttons off"
            li3="People Count Off"
            link="#CreateRoomSection"
          />
        )}
        {/* E-learning - Não apagar ID  */}
        {id === "638642e8b5461f5ed5d8320c" && (
          <EventCard
            h1={event && event.title}
            pTitle={event && event.description}
            p="E-learning Configuration"
            li1="No chat"
            li2="Settings buttons off"
            li3="Group breakout"
            link="#CreateRoomSection"
          />
        )}
        {/* Team meeting - Não apagar ID  */}
        {id === "63864310b5461f5ed5d83210" && (
          <EventCard
            h1={event && event.title}
            pTitle={event && event.description}
            p="Team Meeting Configuration"
            li1="No chat"
            li2="Youtube Integration"
            li3="Host Spotlight"
            li4="Option to change the name"
            link="#CreateRoomSection"
          />
        )}
        {/* Telehealth - Não apagar ID  */}
        {id === "6386431cb5461f5ed5d83212" && (
          <EventCard
            h1={event && event.title}
            pTitle={event && event.description}
            p="Telehealth Room"
            li1="Timer"
            li2="People Count Off"
            li3="Pre-call Review"
            link="#CreateRoomSection"
          />
        )}

        <div className="SectionsEvents">
          {/* Webinar - Não apagar ID */}
          {id === "63864304b5461f5ed5d8320e" && (
            <ToggleSection
              title="Engaging Webinar"
              title1="Easy"
              description1="Callify Webinar room is simple and fast to create. The easiest way make conferences"
              title2="Simple"
              description2="Set up the room and start delivering the best online video calls."
              title3="Secure"
              description3="Safe for everyone - limit the users access."
            />
          )}
          {/* E-learning - Não apagar ID  */}
          {id === "638642e8b5461f5ed5d8320c" && (
            <ToggleSection
              title="Safer E-Learning"
              title1="Easy"
              description1="Callify E-Learning room is simple and fast to create. The easiest way to configure online learning and virtual classrooms."
              title2="Simple"
              description2="Set up the room and start delivering the best online experiences for students and teachers. "
              title3="Secure"
              description3="The E-Learning room is safe for staff and students. Control who can access a call and what students can do in the meeting."
            />
          )}
          {/* Team meeting - Não apagar ID  */}
          {id === "63864310b5461f5ed5d83210" && (
            <ToggleSection
              title="Amazing Team Meetings"
              title1="Easy"
              description1="Make easy and creative team meetings."
              title2="Simple"
              description2="Set up the room and start delivering great experiences for your team."
              title3="Secure"
              description3="With Callify the video calls are safe for everyone."
            />
          )}
          {/* Telehealth - Não apagar ID  */}
          {id === "6386431cb5461f5ed5d83212" && (
            <ToggleSection
              title="Reliable Telehealth"
              title1="Easy"
              description1="Fast to create and simple to configure."
              title2="Simple"
              description2="With Callify your consults are reliable and simple."
              title3="Secure"
              description3="Safer for doctors and patients."
            />
          )}
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
