import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { user } = useContext(AuthContext);

  const [thisUser, setThisUser] = useState({});
  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`
      );
      console.log(response.data);
      setThisUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [user]);

  console.log(user);
  return (
    <div className="ProfilePage">
      <h1>
        Welcome, <span>{thisUser.username}</span>
      </h1>
      <img src={thisUser.imageUrl} alt="profilepic" />

      <Link to={`/profile/edit/${thisUser._id}`}>
        <button class="edit" type="button">
          <span class="edit-icon"></span>
          <span>Edit</span>
        </button>
      </Link>
    </div>
  );
}

export default Profile;
