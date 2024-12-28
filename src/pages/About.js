import React from "react";
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';

import joshuatree from '../assets/joshuatree.jpg'

import "../styles.css"

const About = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="about-page">
                <img src={joshuatree}></img>
                <div className="about-text">
                    <h2>Hi, I'm Lindsay!</h2>
                    <br></br>
                    <p>I'm a second-year student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a> majoring in Computer Science and minoring in Public Affairs.</p>
                    <ul>
                        <li>I'm an undergrad researcher at the Structures Computer Interaction Lab, where I 
                            <a href="https://github.com/SidZal/SCI-Inertial-Navigation-Swarm" target="_blank" rel="noopener noreferrer"> work with 
                            OpenCV and Arduino robotics</a> to research minibot navigation swarming.</li>
                        <li>I serve as a social chair for <a href="https://upe.seas.ucla.edu/" target="_blank" rel="noopener noreferrer">Upsilon Pi Epsilon </a> 
                        and organize socials and retreats for UCLA's computer science community.</li>
                        <li>Additionally, I am a DevOps intern for <a href="https://apply.uclastudentmedia.com/" target="_blank" rel="noopener noreferrer">Student Media</a>, 
                            where I contribute to developing the application website for aspiring student media members.</li>
                    </ul>
                    <br></br>
                    <p>In the past,</p>
                    <ul>
                        <li>I interned at SLAC, where I <a href="https://youtu.be/h7TSGzvew_c?si=mz9CpaHf_yLgddXk&t=2094" target="_blank" rel="noopener noreferrer">
                        develped data processing and automation scripts</a> for x-ray crystallography research.</li>
                        <li>I learned video game development as part of ACM Studio and collaborated on a <a href="https://github.com/Anthonyled/Project-Rudd" target="_blank" rel="noopener noreferrer">
                        2D platforming game using Unity</a>.</li>
                        <li>I explored iOS development at Creative Labs, contributing to <a href="https://github.com/itswwong/SwipeSmart" target="_blank" rel="noopener noreferrer">
                        Swipe-Smart</a>, an app designed to track credit card rewards.</li>
                        <li>I led a robotics team and worked with the district superintendent and board of trustees to <a href="https://www.fuhsd.org/uploaded/2023.10.17_FUHSD_Robotics_RFQ_Information_Meeting_Presentation.pdf" 
                        arget="_blank" rel="noopener noreferrer">build a robotics facility</a> in our school district.</li>
                    </ul>
                    <br></br>
                    <p>Outside of computer science, you can find me <a href="https://www.instagram.com/qinspo.dream/" target="_blank" 
                    rel="noopener noreferrer">creating art</a>, crosswording, crocheting, cafe-hopping (wow, those C hobbies won't cease), 
                    making bad puns, and/or hanging out with friends.</p>
                </div>
                
            </div>
        </div>
        <Contact />
        
        </>
    )
}
export default About;