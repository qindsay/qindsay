import React from 'react';
import "../styles.css";

import { Link } from 'react-router-dom'

import logo from '../assets/lindsay-logo.png'

const NavBar = () => {
  return (
    <>
     <nav>
      <Link to='/'>
             <img
             src={logo}
             alt='A cartoon girl with a green LQ behind her.'/></Link>
      <div className="navbar-container">
         <ul>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/work'>Work</Link></li>
           <li><a href="https://drive.google.com/file/d/1xrISeZxBYSH6D-zwtsyiakH7SjIXhXhC/view?usp=sharing" target="_blank" 
                rel="noopener noreferrer">Resume</a></li>
         </ul>
       </div>
     </nav>
    </>
  );
};


export default NavBar;

    

