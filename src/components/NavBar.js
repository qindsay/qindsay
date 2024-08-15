import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import logo from '../assets/kita.jpg'

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Navbar.Brand href="#home"> 
            <img 
              src={logo} 
              width="50"
              height="50"
              alt=''/>
          </Navbar.Brand>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
    

