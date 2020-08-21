import React, {useState} from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import CalcButton from "./CalcButton";
import Display from "./Display";

import "./Calculator.css";

const Calculator = () =>{

    const [equation, setEquation] = useState([""]);

    const addNumberToCurrent = (number) =>{
        setEquation(equation.map((c,idx)=>idx !== equation.length-1 ? c:String(c)+String(number)))
    }

    const addOperator = (operator)=>{
        setEquation([...equation, operator,""]);
    }

    const doEquation = ()=>{
        let res;
        try {
            // eslint-disable-next-line
            res = eval(equation.join(""))
        } catch(error){
            res = "";
        }
        setEquation([res]);
    }

    return (
        <div className="calculator">
            <Display equation={equation} />
            <div className="calc-row">
                <OperatorButton operator="/" onClick={addOperator} />
                <NumberButton number="7" onClick={addNumberToCurrent} />
                <NumberButton number="8" onClick={addNumberToCurrent} />
                <NumberButton number="9" onClick={addNumberToCurrent} />
            </div>
            <div className="calc-row">
                <OperatorButton operator="*" onClick={addOperator} />
                <NumberButton number="4" onClick={addNumberToCurrent} />
                <NumberButton number="5" onClick={addNumberToCurrent} />
                <NumberButton number="6" onClick={addNumberToCurrent} />
            </div>
            <div className="calc-row">
                <OperatorButton operator="-" onClick={addOperator} />
                <NumberButton number="1" onClick={addNumberToCurrent} />
                <NumberButton number="2" onClick={addNumberToCurrent} />
                <NumberButton number="3" onClick={addNumberToCurrent} />
            </div>
            <div className="calc-row">
                <OperatorButton operator="+" onClick={addOperator} />
                <CalcButton text="c" color="red" onClick={()=>setEquation([""])} />
                <NumberButton number="0" onClick={addNumberToCurrent} />
                <CalcButton text="=" color="green" onClick={doEquation} />
            </div>
        </div>
    )
};

export default Calculator;