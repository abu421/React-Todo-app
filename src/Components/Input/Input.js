import React from "react";
import { v4 as ID } from "uuid";
import add from '../Icons/add.svg';
import './Input.css';

const Input = ({input, setInput, list, setList}) => {

    const userInputHandler = (e) => { 
        setInput(e.target.value);
    }

    const submitInputHandler = () => {
        setList([...list, { id: ID(), value: input }]);
        setInput("");
    }

    return (
        <div className="wrapper">
            <h2>Welcome!!</h2>
            <p>Please add items to your list:</p>

            <div className="input_container">
                <input onChange={userInputHandler} value={input} type="text" />
                <img src={add} onClick={submitInputHandler} className='icon_add' alt='add'/>
            </div>
        </div>
    );
}

export default Input;