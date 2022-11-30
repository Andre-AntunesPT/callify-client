import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

function CreateRoom(props) {
  const [userRoomName, setUserRoomName] = useState("");
  const [palette, setPalette] = useState('')

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);
  const handlePalette = (e) => setPalette(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* process.env.REACT_APP_API_URL is referring to localhost 5005 locally but will be the deployed URL in the future */
      const storedToken = localStorage.getItem("authToken");
      const createdRoom = await axios.post(
        `${process.env.REACT_APP_API_URL}/rooms`,
        {
          userRoomName,
          palette,
          eventId: id,
          userId: user._id,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      /* Clear the inputs */
      setUserRoomName("");

      /* redirect */
      navigate(`/rooms/${createdRoom.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreateRoom">
      <h3>CreateRoom</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userRoomName">Room name</label>
        <input
          type="text"
          name="userRoomName"
          value={userRoomName}
          onChange={handleUserRoomName}
        />
        <select name="roomColor" onClick={handlePalette}>
              <option  value="default">Default</option>
              <option  value="grey">Grey</option>
              <option  value="purple">Purple</option>
              <option  value="burgund">Burgundi</option>
        </select> 
        <button type="submit">Create Room</button>
      </form>
    </div>
  );
}
export default CreateRoom;
