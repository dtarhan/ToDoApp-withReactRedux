import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";


import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import ListTodos from "./components/ListTodos";
import Title from "./components/Title";



function App() {
  return (
    <div>
      
      <Header />
      <Title />
      <AddTodoForm />
      <ListTodos />

    </div>
  );
}

export default App;
