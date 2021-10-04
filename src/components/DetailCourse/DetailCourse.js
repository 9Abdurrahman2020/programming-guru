import React from 'react';
import Rating from 'react-rating';

const DetailCourse = (props) => {
    const {name,img,create,rate,description,duration,added,price} = props.course
    return (
        <div className="col-md-12 d-flex border rounded shadow p-2">
            <div className="me-3 col-md-5">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="col-md-7">
                <h3>{name.slice(0,42)}...</h3>
                <h6>{description}</h6>
                <p className="mb-0"><b>by:</b> <small>{create}</small></p>
                <p className="mb-0"><b>duration:</b> {duration} hours</p>
                <p className="mb-0"><b>Publish:</b> {added}</p>
                <p className="mb-2"><span className="mb-0"><b>Rating:</b> {rate} </span>
                <Rating className="text-warning"
                readonly
                initialRating={rate}
                fullSymbol="fas fa-star"
                emptySymbol="far fa-star"
                >
                </Rating></p>
                <h5>Price: ${price}</h5>
                <button className="btn btn-success w-25">Buy Now</button>           
            </div>
        </div>
    );
};

export default DetailCourse;