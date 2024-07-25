import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <p>{todo.completed}</p>
    </div>
  );
};

export default Todo;
