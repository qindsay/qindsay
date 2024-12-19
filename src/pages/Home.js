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
                <div className="left">
                    <h1>Hi, I'm Lindsay!</h1>
                    <h2>Welcome to my personal site.</h2>
                    <br></br>
                    <p>I’m currently a second-year computer science major at UCLA. I like exploring different aspects of computer science, 
                        including but not limited to web application development and programming for robotics. 
                        Outside of computer science, you can find me painting (insert link), doing the New York Times crossword, crocheting, 
                        making bad puns, and/or hanging out with friends.
                    </p>
                </div>
                <div className="right">
                    <img src={lindsay} alt="portrait of Lindsay on the beach"></img>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Home;