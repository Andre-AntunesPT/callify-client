import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Rooms() {
  /* declare the state */
  const [rooms, setRooms] = useState([]);

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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* We need to call the function in a specific moment */
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="RoomsListPage">
      <h1>List of rooms</h1>
      {rooms.map((room) => {
        return (
          <div key={room._id} className="RoomCard card">
            <Link to={`/rooms/${room._id}`}>
              <h3>{room.userRoomName}</h3>
              <p>{room.roomUrl}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Rooms;
