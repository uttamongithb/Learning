import React from 'react'
import { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:4000/signup', {
                email,
                password
            });
            alert(response.data.message);
        } catch (error) {
          alert(error.response?.data?.message || 'signup failed');
        }
    }
    return (
        <>
            <h1>hello</h1>
            <input type="text" placeholder='enter your name' />
            <input type="email" placeholder='enter your email' />
            <input type="password" placeholder='enter your password' />
            <button>Signup</button>
        </>
    )
}

export default Signup;