import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set((state) => {
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    };
  }),
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export { useRecipeStore };
