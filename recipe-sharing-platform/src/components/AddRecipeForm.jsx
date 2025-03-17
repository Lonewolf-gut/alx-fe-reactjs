// src/components/AddRecipeForm.jsx
import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    if (ingredients.split("\n").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }
    console.log({ title, ingredients, steps });
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4 max-w-lg bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Ingredients (one per line)"
          className="w-full p-2 border rounded"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Preparation Steps"
          className="w-full p-2 border rounded"
          rows="4"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
