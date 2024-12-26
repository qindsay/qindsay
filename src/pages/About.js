import React from "react";
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';

import lindsay from '../assets/lindsay.jpg'

import "../styles.css"

const About = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="about-page">
                <p>Outside of computer science, you can find me painting (insert link), doing the New York Times crossword, crocheting, 
                making bad puns, and/or hanging out with friends.</p>
            </div>
        </div>
        <Contact />
        
        </>
    )
}
export default About;