import axios from 'axios';
import {useState, useEffect, createContext} from 'react';

//create the context

const AuthContext = createContext()

//create the wrapper (the useState for loggedIn ALWAYS start false!)

function AuthProviderWrapper(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    };

    const authenticateUser = async() => {

        try {
            const storedToken = localStorage.getItem('authToken');

        if(storedToken){
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/verify`, {
                headers: {Authorization: `Bearer ${storedToken}`}
            })

//the next part happens if the login was successful
        
        setLoggedIn(true);
        setUser(response.data);
        setLoading(false);
    } else{
        setLoggedIn(false);
        setUser(null);
        setLoading(false);
    }       

        } catch (error) {
            
            //if there is a problem with authentication we don't want a loggedin user
            setLoggedIn(false);
            setUser(null);
            setLoading(false);
        }
        
    }

    useEffect(() => {
        authenticateUser();
    }, []);

    const logout = () => {
        //first we remove the token from the local storage
        localStorage.removeItem('authToken');
        //we run authenticate again to reset the states
        authenticateUser();
    };

    return (
        <AuthContext.Provider value={{loggedIn, user, loading, storeToken, authenticateUser, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export{AuthContext, AuthProviderWrapper};