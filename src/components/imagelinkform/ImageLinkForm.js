import React from 'react';
//import { FaPython } from "react-icons/fa";
import "./imagelinkform.css";
import "tachyons";

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3 p--text center">
                {"This SmartBrain will detect faces in your pictures. Give it a try!"}
            </p>
            <div className="pa4 br3 shadow-5 w-50 center">
                <input type="text" 
                className="f4 pa2 w-75 center br3"/>
                <button 
                className="w-15 grow f4 br3 link ph3 pv2 dib white bg-light-purple">
                Detect</button>
            </div>
        </div>
    );
};
export default ImageLinkForm;