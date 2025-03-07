import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <RecipeList />
        <FavoritesList />
        <RecommendationsList />

        <SearchBar />
        <div style={{ padding: "20px" }}>
          <h1>Recipe Manager</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <RecipeList />
                  <AddRecipeForm />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
