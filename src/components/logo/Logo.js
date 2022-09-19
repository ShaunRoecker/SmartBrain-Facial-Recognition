import React from 'react';
import { GiBrain } from "react-icons/gi";
import "./logo.css";
import "tachyons";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <div>
                <GiBrain className="brain--logo grow"/>
                <h1>SmartBrain Facial Recognition</h1>
            </div>
        </div>
    )
};
export default Logo;
