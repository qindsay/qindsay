import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import logo from '../assets/kita.jpg'

const NavBar = () => {
 return (
   <>
     <nav>
       <a>
             <img
             src={logo}
             width="50"
             height="50"
             alt=''/></a>
       <div className="navbar-container">
         <ul>
           <li>About</li>
           <li>Work</li>
           <li>Resume</li>
         </ul>
       </div>
     </nav>
   </>
 );
};


export default NavBar;

    

