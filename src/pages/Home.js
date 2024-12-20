import React from "react";
import NavBar from '../components/NavBar';
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
                    <p>I'm a...</p>
                    <ul>
                        <li>second-year at UCLA majoring in Computer Science</li>
                        <li>undergrad researcher at the Structures-Computer Interaction Lab</li>
                        <li>previous intern at SLAC</li>
                        <li>bad joke enthusiast</li>
                    </ul>
                    <br></br>
                    <p>While you're here, feel free to check out some of the work I've been doing!</p>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Home;