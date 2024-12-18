import React from "react";
import Card from "./Card.js";
import logo from '../assets/kita.jpg';
import uclax_logo from '../assets/uclax.png';
import massature from '../assets/massature.jpg';
import "../styles.css";

const CardList = () => {
    const projects = [
        {
            title: "SAGE-S Internship Talk",
            imageUrl: logo,
            imageAlt: "hello",
            description: "I gave a talk to high school girls about the work and impact I made at SLAC \
            National Accelerator Laboratory, as well as the opportunities that I explored thanks to the SAGE-S \
            (Science Accelerating Girls' Engagement in STEM) high school program.",
        },
        {
            title: "SCI",
            imageUrl: logo,
            imageAlt: "hello",
            description: "My work at the UCLA Structures-Computer Interaction lab, where I help research inertial navigation swarming in minibots.",
            tools: "C++, Python, Arduino, OpenCV, ArUco, BluePy, Bleak, pySerial",
        }, 
        {
            title: "UCLAX",
            imageUrl: uclax_logo,
            imageAlt: "UCLAX logo",
            description: "A client-server web app that helps UCLA students find other students to split rides to the airport with.",
            tools: "JavaScript, HTML, CSS, React, Node.js, MongoDB"
        },
        {
            title: "Massature",
            imageUrl: massature,
            imageAlt: "a",
            description: "A 2D platforming game where the player must grow and shrink to get to the end of the level.",
            tools: "C#, Unity"
        }
    ]

    return (
        <div className="card-list">
            {projects.map((item, index) => (
                <Card key={index} title={item.title} imageUrl={item.imageUrl} imageAlt={item.imageAlt} description={item.description} tools={item.tools}/>
            )) }
        </div>
    );

}

export default CardList;
