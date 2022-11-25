import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();
    

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
  
    const handleSignupSubmit = async(e) => {e.preventDefault();
    
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { email, password});
       
        //redirect
        navigate('/login')
    } catch (error) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
    }
    
    }



  return (
    <div className='SignupPage'>
    <h1>Signup</h1>
    
    <form onSubmit={handleSignupSubmit}>
    <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <label>Username:</label>
        <input type="username" name="username" value={username} onChange={handleUsername} />

        <button type="submit">Sign Up</button>

    </form>
    
    </div>
  )
}

export default Signup