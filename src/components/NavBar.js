import React from 'react';
import { Link } from 'react-router-dom'
import "../styles.css";
import logo from '../assets/kita.jpg'

const NavBar = () => {
 return (
   <>
     <nav>
       <Link to='/'>
             <img
             src={logo}
             width="50"
             height="50"
             alt=''/></Link>
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

    

