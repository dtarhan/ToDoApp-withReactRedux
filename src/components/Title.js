import React from "react";
import "../assets/global.css";
import Header from "./Header";

import { useSelector } from "react-redux";

const Title = () => {
  const uygulamaninStatei = useSelector((state) => state);
  return (
    <div classNameName="container">
      
      <h1 className="display-4 mt-5 px-5 fw-bold text-primary">TODO APPLICATION WITH REACT-REDUX</h1>
      <p className="text-uppercase mt-2 px-5 fw-bold text-success">Recorded Todo number: {uygulamaninStatei.todosState.todos.length}</p>
      <p className="text-uppercase mt-2 px-5 fw-bold text-secondary">
        The number of HasDone:
        {
          uygulamaninStatei.todosState.todos.filter(
            (item) => item.isDone === true
          ).length
        }{" "}
        The number of Has'nt Done:
        {
          uygulamaninStatei.todosState.todos.filter(
            (item) => item.isDone === false
          ).length
        }
      </p>
    </div>
  );
};

export default Title;
