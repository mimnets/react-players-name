import React from 'react';
import './Player.css';

const Player = (props) => {
    const {first_name, last_name, team} = props.player;
    return (
        <div className='player'> 
            <h1>{first_name} {last_name}</h1>
            <span>{team.city}</span>
        </div>
    );
};

export default Player;