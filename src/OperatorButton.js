import React from "react";
import CalcButton from "./CalcButton";

const OperatorButton = ({operator, onClick})=>{
    return <CalcButton color={'dark-grey'} text={operator} onClick={()=>onClick(operator)} />
};

export default OperatorButton;