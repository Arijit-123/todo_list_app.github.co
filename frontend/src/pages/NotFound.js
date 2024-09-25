import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-6">Oops! The page you are looking for doesn't exist.</p>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Go to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
