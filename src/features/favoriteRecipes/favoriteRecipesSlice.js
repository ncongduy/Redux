import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// create slice reducer and action creators by using createSlice()

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return [...state, action.payload];
    },
    removeRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    },
  },
});

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;

// create selectors

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
