import {useContext} from 'react';
import {AuthContext} from '../contexts/auth.context';
import {Navigate} from 'react-router-dom';


function Anon(props) {
    const {loading, loggedIn} = useContext(AuthContext);
    //first we check if the page is still loading
    if(loading) return <p>Loading...</p>
   
    if (!loggedIn){
        return props.children 
     
     } else {
        return <Navigate to='/'/>
    }

}

export default Anon;