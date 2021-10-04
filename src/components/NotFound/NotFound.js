import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="text-danger display-1 text-center mt-5">404 !</h1>
            <h1 className="display-2 text-warning text-center">Sorry page not found !</h1>
            <Link to="/home" className="error-btn">Go To Home</Link>
        </div>
    );
};

export default NotFound;