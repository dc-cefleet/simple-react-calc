import React from "react";

const CalcButton = ({color, text, onClick})=>{

    return(<div className={`calc-button ${color}`} onClick={onClick}>{text}</div>)
};

export default CalcButton;