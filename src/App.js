import React, { useState } from "react";
import Input from "./Components/Input/Input.js";
import NoteItem from "./Components/NoteItem/NoteItem.js";
import './App.css';

const App = () => {

  const appName = "Abubakar's To-Do App";

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (

    <React.Fragment>
      <div className="app_box">
        <h1 id="header">{appName}</h1>
      </div>
      <Input input={input} setInput={setInput} list={list} setList={setList} />
      <div className="Note_Wrapper">
        {list.map((item) => <NoteItem key={item.id} item={item} setList={setList} />)}
      </div>
      
    </React.Fragment>

  );

};

export default App;