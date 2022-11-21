import React, { useEffect } from 'react';
import classes from './GameContent.module.css';
import excited from './excited.gif';
import song from './gameover.mp3';

const GameContent = (props) => {

    // const gameEnded = () =>{
    //     audio.play();
    // }

    useEffect(() => {
        const audio = new Audio(song);

        if (props.isEnd) {
            audio.play();
        }
    }, [props.isEnd]);
    return (
        <div className={classes.Content}>
            {

            }
            <h1>Welcome to tic tac toe</h1>
            {
                !props.isEnd ? <h1>{props.whoesTurn === "X" ? "0" : "X"} Turn</h1> : <h1>Winner is {props.whoesTurn}</h1>
            }
            {
                props.isEnd ? <img src={excited} alt="excited" /> : null
            }
        </div>
    );
}

export default GameContent;
