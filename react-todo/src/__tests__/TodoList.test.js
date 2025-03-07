import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the TodoList component with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
