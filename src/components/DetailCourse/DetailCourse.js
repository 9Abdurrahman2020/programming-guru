import React from 'react';

const DetailCourse = (props) => {
    const {name,img,create,rate,description,duration,added} = props.course
    return (
        <div className="col-md-12 d-flex border rounded shadow p-2">
            <div className="me-3 col-md-5">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="col-md-7">
                <h3>{name.slice(0,42)}...</h3>
                <h6>{description}</h6>
                <p className="mb-0"><b>by:</b> <small>{create}</small></p>
                <p className="mb-0"><b>Rating:</b> {rate}</p>
                <p className="mb-0"><b>duration:</b> {duration} hours</p>
                <p className="mb-2"><b>Publish:</b> {added}</p>
                <h5>Price: $43</h5>
                <button className="btn btn-success w-25">Buy Now</button>           
            </div>
        </div>
    );
};

export default DetailCourse;