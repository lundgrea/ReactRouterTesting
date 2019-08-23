import React from 'react';
import { Link } from 'react-router-dom';
import './image-display.css';

const Creatures = ({ data }) => {
    const displayCreatures = data.map(creature => {
        const { id, image, type } = creature
        return (
        <Link to={`${type}/${id}`}>
            <img src={image} className="app-img" key={id}/>
        </Link>
        )
    }
    )
    return (
        <>
        <h2>{Creatures}</h2>
        {displayCreatures}
        </>
    )
}

export default Creatures;