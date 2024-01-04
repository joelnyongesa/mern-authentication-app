import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useToken();

    const navigate = useNavigate();

    const handleLogIn = async () => {
        const response = await axios.post('/api/login', {
            email: email,
            password: password,
        });

        const { token } = response.data;
        setToken(token);
        navigate('/')
    }

  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 
            className='text-4xl font-bold mb-5 py-3'
        >Log In</h1>
        <input
            type='email' 
            placeholder='example@email.com' 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            className='border rounded p-1 my-2'
        />
        <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            className='border rounded p-1 my-2'
        />

        <hr/>

        <button 
            type='submit' 
            disabled={!email || !password}
            className='hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-md border my-2'
            onClick={handleLogIn}
        >Log In</button>
        <button 
            onClick={() => navigate('/signup')}
            className='hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-md border'
        >Don't have an account? Sign Up</button>
    </div>
  )
}

export default Login