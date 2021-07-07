import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// create slice reducer and action creators by using createSlice()
export const favoriteRecipesReducer = createSlice({
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

// export action creators
export const { addRecipe, removeRecipe } = favoriteRecipesReducer.actions;

// export reducer
export default favoriteRecipesReducer.reducer;

// create selectors
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
