import React from 'react';
import classes from "./Box.module.css";
import './Box2.css'
const Box = (props) => {
    const myclasses = classes.Box + " class" + props.id;
    return (
        <div className={myclasses}  onClick={(e) =>{props.toggleTheTurn(e)}}></div>
    );
}

export default Box;
