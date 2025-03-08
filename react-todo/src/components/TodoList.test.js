import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

// Sample test suite for the TodoList component
describe("TodoList Component", () => {
  test("renders the initial list of todos", () => {
    render(<TodoList />);

    // Check if default todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    console.log(todoItem.className); // Check what class is applied
    expect(todoItem).toHaveClass("completed");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const todoItemText = "Learn React"; // ✅ Define the variable

    const todoItem = screen.getByText(todoItemText);
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]); // Click the first delete button

    await waitFor(() => {
      expect(screen.queryByText(todoItem)).not.toBeInTheDocument();
    });
  });
});
