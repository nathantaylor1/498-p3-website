import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import './Button.css';

function Button({ text, link }) {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `${link}`; 
        navigate(path);
    }

    return (
        <>
            <div className="button-container ">
                <button onClick={routeChange}>{text}</button> 
            </div>
        </>
    );
}

export default Button;
