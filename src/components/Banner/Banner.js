import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container mb-5">
            <div className="banner-text container">
            <h1 className="display-1 mb-4 text-success"><span className="text-danger">Programming</span> Guru</h1>
            <h3 className="display-6 mb-4">Learn and lead the world</h3>
            <Link to="/courses" className="btn btn-success">All Courses</Link>
            </div>
        </div>
    );
};

export default Banner;