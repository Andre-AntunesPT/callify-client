import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateRooms() {
  const [userRoomName, setUserRoomName] = useState("");
  const [palette, setPalette] = useState("");
  const [eventId, setEventId] = useState("");

  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);
  const handlePalette = (e) => setPalette(e.target.value);

  const getRoom = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rooms/${id}`
      );

      //response.data = {title, description}
      setUserRoomName(response.data.userRoomName);
      setPalette(response.data.palette);
      setEventId(response.data.event);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoom();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/rooms/${id}`, {
        userRoomName,
        palette,
      });

      //clear the inputs
      setUserRoomName("");
      setPalette("");

      //redirect to the details view
      navigate(`/rooms/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/rooms/${id}/${user._id}/${eventId}`
      );
      //after we delete we redirect back to the room list
      navigate("/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditRoomPage">
      <form onSubmit={handleSubmit}>
        <div class="conteudo">
          <h1>Edit room</h1>
          <div className="meu-box">
            <input
              type="text"
              name="userRoomName"
              value={userRoomName}
              onChange={handleUserRoomName}
              placeholder="Room name"
            />
            <label htmlFor="userRoomName">New room name</label>
          </div>
          <div className="meu-box">
            <select name="roomColor" onChange={handlePalette} value={palette}>
              <option value="default">Default</option>
              <option value="grey">Grey</option>
              <option value="purple">Purple</option>
              <option value="burgund">Burgundi</option>
            </select>
          </div>
          <button className="button-89" type="submit">
            Edit Room
          </button>
          <button className="button-89 btn-delete" onClick={deleteRoom}>
            Delete room
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateRooms;
