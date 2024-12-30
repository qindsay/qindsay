import React from "react";

import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import CardList from '../components/CardList';
import "../styles.css";

const Work = () => {
    
    return (
        <>
        <NavBar />
        <div className="content">
            <h1>Projects</h1>
            <br></br>
            <CardList />
        </div>
        <Contact />
        </>
    )
}
export default Work;