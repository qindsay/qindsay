import React from 'react';
import { Link } from 'react-router-dom'
import "../styles.css";

const Card = ({ link, title, imageUrl, imageAlt, description, tools }) => {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h2>{title}</h2>
                <img src={imageUrl} alt={imageAlt} />
            </a>
            <p>{description}</p>
            <p>{tools}</p>
        </div>
    );
}

export default Card;