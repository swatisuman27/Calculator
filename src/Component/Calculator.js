import React, { useState } from 'react'

const Calculator=()=> {

    const [calc, setCalc] = useState("");

    const ops = ['/' , '*' , '-' , '+' , '.'];

    const updateCalc = (value) => {
        if((ops.includes(value) && calc=== "") ||
        (ops.includes(value) && ops.includes(calc.slice(-1)))){
            return;
        }
        setCalc(calc+value)
    }

    const delLast = () => {
        if(calc == ""){
            return
        }
        const value = calc.slice(0, -1);

        setCalc(value)
    }

    const allClear = () => {
        setCalc(0);
        window.location.reload();
    }
    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    return (
        // <div>
            <div className='calculator'>
                <div className='display'>{calc || 0}</div>
                <div className='operators'>                    
                <button onClick={allClear}>AC</button>
                <button onClick={()=> {updateCalc("/")}}>/</button>
                <button onClick={()=> {updateCalc("*")}}>*</button>
                <br/>
                <button onClick={()=> {updateCalc("-")}}>-</button>
                <button onClick={()=> {updateCalc("+")}}>+</button>
                <button onClick={delLast}>DEL</button>
                </div>
                <div className='digits'>
                    <button onClick={()=> {updateCalc("1")}}>1</button>
                    <button onClick={()=> {updateCalc("2")}}>2</button>
                    <button onClick={()=> {updateCalc("3")}}>3</button>
                    <br/>
                    <button onClick={()=> {updateCalc("4")}}>4</button>
                    <button onClick={()=> {updateCalc("5")}}>5</button>
                    <button onClick={()=> {updateCalc("6")}}>6</button>
                    <br/>
                    <button onClick={()=> {updateCalc("7")}}>7</button>
                    <button onClick={()=> {updateCalc("8")}}>8</button>
                    <button onClick={()=> {updateCalc("9")}}>9</button>
                    <br/>
                    <button onClick={()=> {updateCalc("0")}}>0</button>
                    <button onClick={()=> {updateCalc(".")}}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>            
    //     </div>
     )
}

export default Calculator

