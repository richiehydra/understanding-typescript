import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todo, setTodo] = useState<{ id: number; name: string }[]>([]);

  const addtodoHandler = (data: string) => {
    setTodo([...todo, { id: Math.random() * 100, name: data }]);
  };

  return (
    <>
      <NewTodo addtodo={addtodoHandler} />
      <TodoList item={todo} />
    </>
  );
}

export default App;
