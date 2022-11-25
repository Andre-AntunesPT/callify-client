import {useState, useContext} from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import {AuthContext} from '../contexts/auth.context';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

  return (
    <div>Login</div>
  )
}

export default Login