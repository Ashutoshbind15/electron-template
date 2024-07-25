import React from "react";
import Todo from "./Todo.jsx";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
