import {useContext} from 'react';
import {AuthContext} from '../contexts/auth.context';

function Profile() {
    const {loggedIn, user, logout} = useContext(AuthContext);
  return (
    <div>
        <h1>Welcome, {user.username}</h1>
    </div>
  )
}

export default Profile;