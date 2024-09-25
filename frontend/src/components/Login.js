import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({ email, password });
        if (response.success) {
            navigate('/tasks');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="block w-full mb-4 p-2 border"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full mb-4 p-2 border"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
}

export default Login;
