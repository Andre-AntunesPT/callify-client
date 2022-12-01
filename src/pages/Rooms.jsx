import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Rooms() {
  /* declare the state */
  const [rooms, setRooms] = useState([]);
  const [date, setDate] = useState("");
  const [eventId, setEventId] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  /* function to call the API */
  const getRooms = async () => {
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rooms`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setRooms(response.data);
      setEventId(response.data.event);
      console.log(response.data);

      let i;
      for (i = 0; i < response.data.length; i++) {
        const sliceDate = response.data[i].startDate.slice(0, 10);
        setDate(sliceDate);
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* We need to call the function in a specific moment */
  useEffect(() => {
    getRooms();
  }, [user]);

  const deleteRoom = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/rooms/${rooms.id}/${user._id}/${eventId.id}`
      );
      //after we delete we redirect back to the room list
      navigate("/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="RoomsListPage">
      {rooms &&
        rooms.map((room) => {
          return (
            <div key={room._id} class="RoomsCard square-flip">
              <div className="square">
                <div className="square-container">
                  <h2 className="textshadow">{room.userRoomName}</h2>
                  <p className="textshadow">{date}</p>
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
                  <Link to={`/rooms/${room._id}`}>
                    <button className="button-89">Go to Room</button>
                  </Link>

                  <button className="button-89 btn-delete" onClick={deleteRoom}>
                    Delete room
                  </button>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Rooms;
