import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

function CreateRoom(props) {
  const [userRoomName, setUserRoomName] = useState("");
  /* const [roomMode, setRoomMode] = useState(""); */
  const [palette, setPalette] = useState("");

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);
  /* const handleRoomMode = (e) => setUserRoomName(e.target.value); */
  const handlePalette = (e) => setPalette(e.target.value);

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
          /* roomMode, */
          eventId: id,
          userId: user._id,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      console.log(createdRoom);

      /* Clear the inputs */
      setUserRoomName("");
      /* setRoomMode(""); */

      /* redirect */
      navigate(`/rooms/${createdRoom.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreateRoom">
      <form onSubmit={handleSubmit}>
        <div class="conteudo">
          <h1>Create Room</h1>
          {/* 
          <div className="meu-box">
            <input
              type="text"
              name="roomMode"
              value={"group"}
              onChange={handleRoomMode}
              placeholder="Room name"
            />
            <label htmlFor="roomMode">Room mode</label>
          </div> */}
          <div className="meu-box">
            <input
              type="text"
              name="userRoomName"
              value={userRoomName}
              onChange={handleUserRoomName}
              placeholder="Room name"
            />
            <label htmlFor="userRoomMode">Room name</label>
          </div>
          <div className="meu-box">
            <select name="roomColor" onClick={handlePalette} required>
              <option value="default">Default</option>
              <option value="grey">Grey</option>
              <option value="purple">Purple</option>
              <option value="burgund">Burgundi</option>
            </select>
          </div>

          <button className="button-89" type="submit">
            Create Room
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateRoom;
