import React from "react";
import CalcButton from "./CalcButton";

const NumberButton = ({number, onClick})=>{
    return <CalcButton color={'grey'} text={number} onClick={()=>onClick(number)} />
};

export default NumberButton;