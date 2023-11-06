import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Input from "./components/Input";
import TodoListCard from "./components/TodoListCard";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "리액트",
      contents: "멘탈잡아!!!!",
      isDone: false,
    },
  ]);

  const Header = () => {
    return (
      <div className="mainTitle">
        <h1>My Todo List🥊</h1>
      </div>
    );
  };

  return (
    <div className="layout">
      <div className="container">
        <Header />
        <Input todos={todos} setTodos={setTodos} />
        <TodoListCard todos={todos} setTodos={setTodos} listIsDone={false} />
        <TodoListCard todos={todos} setTodos={setTodos} listIsDone={true} />
      </div>
    </div>
  );
};

export default App;
