import React, { useEffect, useState } from "react";
import { getTodos } from "../../dataaccess/queries/todos/index.js";
import TodoList from "../components/todos/TodoList.jsx";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const helper = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      }
    };

    helper();
  });

  return (
    <>
      <div>Home Page</div>
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
