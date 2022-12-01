import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link, useParams, useNavigate } from "react-router-dom";
import LoginIframe from "../components/LoginIframe";
import axios from "axios";

function RoomDetails() {
  /* Apesar de ser um objecto coloca-se null senão vai ler como undefined */
  const [room, setRoom] = useState(null);
  const [eventId, setEventId] = useState("");

  const { loggedIn } = useContext(AuthContext);

  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getRooms = async () => {
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rooms/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setRoom(response.data);
      setEventId(response.data.event);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* We need to call the function in a specific moment */
  useEffect(() => {
    getRooms();
    /* If we were able to go from one details view straight to another we should pass id on the dependency array below, so that everytime the component rerenders we get the information from the correct/latest id */
  }, []);

  const deleteRoom = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/rooms/${id}/${user._id}/${eventId}`
      );

      //after we delete we redirect back to the events list
      navigate("/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="RoomDetails">
      {loggedIn && room && (
        /* React Fragment <> </> if we don't want to specify a parent - doesn't add anything to the HTML (only its content) */
        <>
          <div className="RoomHeader">
            <h1>{room.userRoomName}</h1>

            <div>
              <Link to={`/rooms/edit/${id}`}>
                <button class="edit" type="button">
                  <span class="edit-icon"></span>
                  <span>Edit</span>
                </button>
              </Link>

              <button class="edit delete" type="button" onClick={deleteRoom}>
                <span class="edit-icon"></span>
                <span>Delete Room</span>
              </button>
            </div>
          </div>
          {/* Webinar - Não apagar ID */}
          {room.event === "63864304b5461f5ed5d8320e" && (
            <iframe
              src={`${room.roomUrl}?settingsButton=off&?people=off&roomIntegrations`}
              allow="camera; microphone; fullscreen; speaker; display-capture >"
              className="iframe-teste"
              title="iframe"
            ></iframe>
          )}
          {/* E-learning - Não apagar ID  */}
          {room.event === "638642e8b5461f5ed5d8320c" && (
            <iframe
              src={`${room.roomUrl}?chat=off&settingsButton=off&breakout=on`}
              allow="camera; microphone; fullscreen; speaker; display-capture >"
              className="iframe-teste"
              title="iframe"
            ></iframe>
          )}
          {/* Team meeting - Não apagar ID  */}
          {room.event === "63864310b5461f5ed5d83210" && (
            <iframe
              src={`${room.roomUrl}?chat=off&autoSpotlight&subgridLabels=on`}
              allow="camera; microphone; fullscreen; speaker; display-capture >"
              className="iframe-teste"
              title="iframe"
            ></iframe>
          )}
          {/* Telehealth - Não apagar ID  */}
          {room.event === "6386431cb5461f5ed5d83212" && (
            <iframe
              src={`${room.roomUrl}?people=off&timer=on`}
              allow="camera; microphone; fullscreen; speaker; display-capture >"
              className="iframe-teste"
              title="iframe"
            ></iframe>
          )}
        </>
      )}
      {!loggedIn && (
        <>
          <LoginIframe />
        </>
      )}
{/* 
      <button onClick={deleteRoom}>Delete Room</button> */}

      {/* {event &&
        event.rooms.map((room) => (
          <li key={room._id} className="RoomCard card">
            <h3>{room.userRoomName}</h3>
          </li>
        ))} */}
    </div>
  );
}
export default RoomDetails;
