import React from "react";
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import lindsay from '../assets/lindsay.jpg'

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
                    <p>I'm a 2nd-year at UCLA majoring in Computer Science.</p>
                    <br></br>
                    <p>I'm also a</p>
                    <ul>
                        <li>previous intern at SLAC</li>
                        <li>undergrad researcher at UCLA's SCI Lab</li>
                        <li>and a bad joke enthusiast!</li>
                    </ul>
                    <br></br>
                    <p>While you're here, feel free to check out some of the work I've been doing.</p>
                </div>
            </div>
        </div>
        <Contact />
        
        </>
    )
}
export default Home;