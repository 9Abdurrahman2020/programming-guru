import React from 'react';
import img from '../../images/progteam1.jpg';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <div className="aboutus-container">
            <div className="row container mx-auto align-items-center p-5">
                <div className="col-md-6">
                <h1 className="text-success">Hi ! We're Programming <span className="text-danger">Guru</span> </h1>
                <p className="text-success">Keep learning with persistance !</p>
                </div>
                <div className="col-md-6">
                <img src={img} className="w-75" alt="" />
                </div>
            </div>
            </div>
            <div className="container my-5">
            <h2>About us</h2>
            <p>We provide top trending market demanding programming courses. As it is growing rapidly, we also making content as it's demand .So no worry keep in touch with us and upgrade you day by day. We have a very dedicated and hard working team for you. Thanks for stay with us.</p>
            </div>
        </div>
    );
};

export default AboutUs;