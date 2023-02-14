import React, { useState } from "react";

import { useDispatch } from "react-redux";

import actionTypes from "../redux/actions/actionTypes";
import "../assets/global.css";

const SingleTodo = ({ todo }) => {
  const [guncelleyeBasildiMi, setGuncelleyeBasildiMi] = useState(false);
  const [guncellenecekText, setGuncellenecekText] = useState(todo.text);

  const dispatch = useDispatch();

  const todoGuncelle=(event)=>{
    event.preventDefault()
    /* validation yapılabilir */
    if(guncellenecekText === ""){
        alert("Text boş bırakılamaz")
        return
    }
    var guncellenmisTodo={
        ...todo,
        text:guncellenecekText
    }
    dispatch({type:actionTypes.TODO_GUNCELLE,payload:guncellenmisTodo})
    setGuncelleyeBasildiMi(false)
  }
  return (
    <div className="container">
      <h1 className={todo.isDone ? "todoDone" : "todoUnDone"}>{todo.text}</h1>
      {guncelleyeBasildiMi && (
        <form onSubmit={todoGuncelle} style={{ margin: "10px" }}>
          <input
            value={guncellenecekText}
            onChange={(event) => setGuncellenecekText(event.target.value)}
          />
          <button className="btn btn-success"  onClick={() => {
            setGuncelleyeBasildiMi(false)
            setGuncellenecekText(todo.text)
            }} type="button">
            Vazgeç
          </button>
          <button type="submit" className="btn btn-warning">Kaydet</button>
        </form>
      )}
      <div>
        <button className="btn btn-danger"
          onClick={() =>
            dispatch({ type: actionTypes.TODO_SIL, payload: todo.id })
          }>
          Sil
        </button>
        <button className="btn btn-secondary"
          onClick={() =>
            dispatch({
              type: actionTypes.CHANGE_TODO_DONE,
              payload: todo.id,
            })
          }>
          {todo.isDone === true ? "Yapılmadı" : "Yapıldı"}
        </button>
        <button className="btn btn-success" onClick={() => setGuncelleyeBasildiMi(true)}>Güncelle</button>
      </div>
      <hr />
    </div>
  );
};

export default SingleTodo;
