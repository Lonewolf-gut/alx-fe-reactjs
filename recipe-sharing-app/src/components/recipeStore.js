import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe], // Update filtered list
    })),

    // Update an existing recipe
  updateRecipe: (updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
    setSearchTerm: (term) => 
      set({ searchTerm: term }, false, 'setSearchTerm'),

  // Delete a recipe
  deleteRecipe: (recipeId) => 
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));
  // Set initial recipes (useful when fetching from an API)
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes, // Sync filtered recipes initially
    })),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // Prevent duplicates
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
