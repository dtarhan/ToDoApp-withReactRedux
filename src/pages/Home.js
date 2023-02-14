import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import AddTodoForm from "./components/AddTodoForm";
import ListTodos from "./components/ListTodos";
import Title from "./components/Title";



const Home = () => {
  

  return (
    <div>
      <Header />
      <Title />
      <AddTodoForm />
      <ListTodos />
      
    </div>
  );
};

export default Home;
