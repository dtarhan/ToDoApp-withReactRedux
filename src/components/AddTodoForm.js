import React, { useState } from "react";
import "../assets/global.css";

import { useDispatch } from "react-redux";

import actionTypes from "../redux/actions/actionTypes";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      isDone: false,
      date: new Date()
    }
    dispatch({ type: actionTypes.TODO_EKLE, payload: newTodo })
    setText("")
  }
  return (

    
    <div >
      <form onSubmit={handleSubmit}>
        <input class="input1" placeholder="Write your todo..." value={text} onChange={(event) => setText(event.target.value)} />
        <button className="btn btn-primary btn-md" type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
