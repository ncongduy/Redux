import allRecipesData from "../../data";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

// create action creators
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

// create a slice reducer
const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};

// create a selector which is a pure function instruction accesing data from store
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
