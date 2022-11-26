import { useState } from "react";
import axios from "axios";

function CreateRoom(props) {
  const [userRoomName, setUserRoomName] = useState("");

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

      /* Refresh the list - we have passed this method to the component AddProject on ProjectDetails */
      props.refreshProjects();
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

        <button type="submit">Create Room</button>
      </form>
    </div>
  );
}
export default CreateRoom;
