import {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

function UpdateProfile() {
    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handleImageUrl = (e) => setImageUrl(e.target.value);

    const getProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`);

            setUsername(response.data.username);
            setImageUrl(response.data.imageUrl);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/profile/${id}`, {username, imageUrl});

            setUsername('');
            setImageUrl('');

            navigate(`/profile/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='EditProfilePage'>
    
    <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='username' name='username' value={username}  onChange={handleUsername}/>

            <label htmlFor='imageUrl'>Profile Photo</label>
            <input type='imageUrl' name='imageUrl' value={imageUrl}  onChange={handleImageUrl}/>

            <button type='submit'>Edit Profile</button>
        </form>
    
    
    </div>
  )
}

export default UpdateProfile