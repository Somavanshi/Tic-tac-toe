import React, { useCallback, useEffect, useState } from 'react';
import Game from './Game/Game';
import classes from './GameBox.module.css'
import GameContent from './GameContent/GameContent';
import sound from './ting.mp3';
const GameBox = () => {
    const [whoesTurn, setwhoesTurn] = useState("");
    const [isEnd, setisEnd] = useState(false);
    const [xArray, setxArray] = useState([]);
    const [yArray, setyArray] = useState([]);

    const checker = (arr, target) => target.every(v => arr.includes(v));

    useEffect(() => {
        const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (const array of combinations) {
            const isPresentInX = checker(xArray, array);
            const isPresentInY = checker(yArray, array);
            if (isPresentInX || isPresentInY) {
                setisEnd(true);
                break;
            }
        }
    }, [xArray, yArray]);

    const toggleTheTurn = useCallback((e, index) => {
        const audio = new Audio(sound)
        audio.play()
        if (!e.target.innerText) {

            setwhoesTurn(initialState => {
                const newState = initialState === "X" ? "0" : "X";

                if (newState === "X") {
                    setxArray(initialState => {
                        return [...initialState, index];
                    });
                } else {
                    setyArray(initialState => {
                        return [...initialState, index];
                    });
                }

                e.target.innerText = newState;
                return newState;
            }
            );
        }
    }, []);

    return (
        <div className={classes.Container}>
            <Game toggleTheTurn={(e, index) => { toggleTheTurn(e, index) }} />
            <GameContent whoesTurn={whoesTurn} isEnd={isEnd} />
        </div>
    );
}

export default GameBox;
