import React from "react";
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import headshot from '../assets/Lindsay Qin.jpg';


import "../styles.css"

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="home-page">
                <div className="intro-text">
                    <h1>Hi, I'm Lindsay!</h1>
                    <h2>Welcome to my personal site.</h2>
                    <br></br>
                    <p>Right now, I'm a 2nd-year student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a> majoring in Computer Science and minoring in Public Affairs.</p>
                    <br></br>
                    <p>I'm also a</p>
                    <ul>
                        <li>previous intern at <a href="https://www6.slac.stanford.edu/" target="_blank" rel="noopener noreferrer">SLAC</a></li>
                        <li>undergrad researcher at UCLA's <a href="https://structures.computer/" target="_blank" rel="noopener noreferrer">SCI Lab</a></li>
                        <li>and a bad joke enthusiast!</li>
                    </ul>
                    <br></br>
                    <p>While you're here, feel free to check out what I've been up to, from <Link to='/work'>professional projects</Link> to <Link to='/about'>personal passions</Link>.</p>
                </div>
                <img src={headshot}></img>
            </div>
        </div>
        <Contact />
        
        </>
    )
}
export default Home;