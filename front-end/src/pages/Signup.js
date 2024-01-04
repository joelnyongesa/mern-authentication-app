import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [token, setToken] = useToken();

    const navigate = useNavigate();

    const onSignUp = async () => {
        const response = await axios.post('/api/signup', {
            email: email,
            password: password,
        });

        const { token } = response.data;
        setToken(token);
        navigate('/');
    }


  return (
    <div className='flex flex-col items-center justify-center'>
        <h1
            className='text-4xl font-bold mb-5 py-3'
        > Sign Up</h1>
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
        <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            className='border rounded p-1 my-2'
        />
        <button
            type='submit'
            className='hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-md border my-2'
            disabled={!email || !password || password !== confirmPassword}
            onClick={onSignUp}
        >Sign Up</button>
        <button
            className='hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-md border my-2'
            onClick={()=> navigate('/login')}
        >Already registered? Log In</button>
    </div>
  )
}

export default Signup