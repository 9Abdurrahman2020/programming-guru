import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black text-white p-4 text-center">
            <div className="d-flex justify-content-center">
            <p className="me-2"><i class="fab fa-facebook"></i></p>
            <p className="me-2"><i class="fab fa-youtube"></i></p>
            <p className="me-2"><i class="fab fa-instagram"></i></p>
            <p className="me-2"><i class="fab fa-twitter"></i></p>
            </div>
            <Nav className="ms-auto justify-content-center mb-3">
                    <Link className="text-white me-3 text-decoration-none" to="/home">Home</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/courses">Courses</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/contact">Contact</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/about">About us</Link>
                    </Nav>
            <p>Copyrights &copy;2021 All rights are reserved by Abdur Rahman</p>
        </div>
    );
};

export default Footer;