import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CreateRoom(props) {
  const [userRoomName, setUserRoomName] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const createdRoom = await axios.post(
        `${process.env.REACT_APP_API_URL}/rooms`,
        {
          userRoomName,
          eventId: id,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      /* Clear the inputs */
      setUserRoomName("");

      /* redirect */

      navigate(`/rooms/${createdRoom._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreateRoom">
      <h3>CreateRoom</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userRoomName"></label>
        <input
          type="text"
          name="userRoomName"
          value={userRoomName}
          onChange={handleUserRoomName}
        />

        <button type="submit">Create Room</button>
      </form>
    </div>
  );
}
export default CreateRoom;
