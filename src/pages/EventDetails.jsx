import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateRoom from "../components/CreateRoom";

function EventDetails() {
  /* Apesar de ser um objecto coloca-se null senão vai ler como undefined */
  const [event, setEvent] = useState(null);
  //const [rooms, setRoom] = useState(null);

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
      {event && (
        /* React Fragment <> </> if we don't want to specify a parent - doesn't add anything to the HTML (only its content)  */
        <>
          <CreateRoom refreshProjects={getEvents} />
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </>
      )}

      {event &&
        event.rooms.map((room) => {
          return (
            <li key={room._id} className="RoomCard card">
              <h3>{room.userRoomName}</h3>
            </li>
          );
        })}
    </div>
  );
}

export default EventDetails;
