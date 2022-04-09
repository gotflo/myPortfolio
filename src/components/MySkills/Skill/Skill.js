import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.css";

const Skill = (props) => {
    return (
        <div className="flexRow align-center">
            <div className="skillContainer">
                <CircularProgressbar
                    value={props.value}
                    text={`${props.value}%`}
                    styles={buildStyles({
                        textColor: props.textColor,
                        pathColor: props.pathColor,
                        trailColor: "F1F7E7"
                    })}
                />
            </div>
            <div className="mlr-10">
                <p className="title">{props.skillName}</p>
                <p> {props.desc} </p>
            </div>
        </div>
    );
};

export default Skill
