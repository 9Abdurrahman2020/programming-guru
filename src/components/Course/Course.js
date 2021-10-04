import React from 'react';
import Rating from 'react-rating';
import './Course.css'
const Course = (props) => {
    const{name,img,create} = props.course;
    return (
        <div className="col-md-6 p-4">
            <div className="d-flex">
            <div className="me-3">
                <img className="" src={img} alt="" />
            </div>
            <div className="">
                <h5>{name.slice(0,41)}...</h5>
                <p className="mb-0">by: <small>{create}</small></p>
                <h6 className="mb-1">Price: $34</h6>
                <button className="buy-now-btn">Buy Now</button>              
            </div>
            </div>
        </div>
    );
};

export default Course;