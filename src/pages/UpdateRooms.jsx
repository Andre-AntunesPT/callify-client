import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateRooms() {
  const [userRoomName, setUserRoomName] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleUserRoomName = (e) => setUserRoomName(e.target.value);

  const getRoom = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rooms/${id}`
      );

      //response.data = {title, description}
      setUserRoomName(response.data.title);
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
      });

      //clear the inputs
      setUserRoomName("");

      //redirect to the details view
      navigate(`/rooms/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/rooms/${id}`);
      //after we delete we redirect back to the room list
      navigate("/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditRoomPage">
      <h3>Edit room</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userRoomName">Title</label>
        <input
          type="text"
          name="userRoomName"
          value={userRoomName}
          onChange={handleUserRoomName}
        />

        <button type="submit">Edit Room</button>
      </form>

      {/* Delete the room */}
      <button onClick={deleteRoom}>Delete room</button>
    </div>
  );
}

export default UpdateRooms;
