import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CreateRoom(props) {
  const [userRoomName, setUserRoomName] = useState("");

  const { eventId } = useParams();

  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      await axios.post(
        `${process.env.REACT_APP_API_URL}/rooms`,
        {
          userRoomName,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      /* Clear the inputs */
      setUserRoomName("");

      /* redirect */

      navigate(`/rooms/${eventId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreateRoom">
      <h3>CreateRoom</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userRoomName">Title</label>
        <input
          type="text"
          name="userRoomName"
          value={userRoomName}
          onChange={handleUserRoomName}
        />
        {/* <input
          type="text"
          name="eventId"
          value={eventId}
          placeholder={eventId}
        /> */}

        <button type="submit">Create Room</button>
      </form>
    </div>
  );
}
export default CreateRoom;
