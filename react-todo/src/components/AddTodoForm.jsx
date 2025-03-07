import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAddTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
