import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RoomDetails() {
  /* Apesar de ser um objecto coloca-se null senão vai ler como undefined */
  const [room, setRoom] = useState(null);

  const { id } = useParams();
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



  const deleteRoom = async () =>{
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/room/${id}`);

        //after we delete we redirect back to the events list
        navigate('/events')
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="RoomDetails">
      {room && (
        /* React Fragment <> </> if we don't want to specify a parent - doesn't add anything to the HTML (only its content) */
        <>
          <h1>{room.userRoomName}</h1>
          <p>{room.roomUrl}</p>
          <iframe
            src={room.roomUrl}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            className="iframe-teste"
            title="iframe"
          ></iframe>
        </>
      )}

      <button onClick={deleteRoom}>Delete Room</button>

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
