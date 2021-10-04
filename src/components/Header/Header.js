import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link className="text-white me-3 text-decoration-none h5" to="/home">Programming Guru</Link>
                    <Nav className="ms-auto ">
                    <Link className="text-white me-3 text-decoration-none" to="/home">Home</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/courses">Courses</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/contact">Contact</Link>
                    <Link className="text-white me-3 text-decoration-none" to="/about">About us</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;