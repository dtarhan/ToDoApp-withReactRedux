import React from "react";

import { useSelector } from "react-redux";

import SingleTodo from "./SingleTodo";
import "../assets/global.css";



const ListTodos = () => {
  const uygulamaninStatei = useSelector((state) => state);
  return (
    <div>
      {uygulamaninStatei.todosState.todos.length === 0 && (
        <p class="p1"  >There is not any recorded Todo yet! </p>
      )}
      {uygulamaninStatei.todosState.todos.length > 0 && (
        <>
          {uygulamaninStatei.todosState.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
