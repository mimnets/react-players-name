import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import './Players.css';

const Players = () => {
    const [players, setPlayers] = useState([]);
    console.log(players)
    useEffect(()=>{
        fetch('https://www.balldontlie.io/api/v1/players')
        .then(res => res.json())
        .then(data => setPlayers(data.data))
        .catch(error => console.lor(error))
    },[])
    return (
        <div>
            <h1>All Players Name</h1>
        <div className='players'>
            {
                players.map(player => <Player player={player} key={player.id}></Player>)
            }
        </div>
        </div>
    );
};

export default Players;