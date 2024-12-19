import React from 'react';
import { Link } from 'react-router-dom'
import "../styles.css";
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
           <li>About </li>
           <li><Link to='/work'>Work</Link></li>
           <li>Resume</li>
         </ul>
       </div>
     </nav>
   </>
 );
};


export default NavBar;

    

