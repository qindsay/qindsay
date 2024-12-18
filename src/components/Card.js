import React from 'react';
import { Link } from 'react-router-dom'
import "../styles.css";

const Card = ({ title, imageUrl, imageAlt, description, tools }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={imageUrl} alt={imageAlt} />
            <p>{description}</p>
            <p>{tools}</p>
        </div>
    );
}

export default Card;