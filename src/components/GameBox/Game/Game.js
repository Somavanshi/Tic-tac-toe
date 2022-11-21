import React from 'react';
import Box from './box/Box';
import classes from "./Game.module.css"

const Game = (props) => {
    return (
        <div className={classes.GameBoxOuter}>
            <div className={classes.GameBoxes}>
                {
                    [...Array(9)].map((item, index) => 
                        <Box WhoesTurn={props.WhoesTurn} toggleTheTurn = {(e)=>{props.toggleTheTurn(e,index)}} 
                            key ={index} id={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default Game;
