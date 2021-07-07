import { createSlice } from "@reduxjs/toolkit";

// create slice reducer and action creators by using createSlice()
export const searchTermReducer = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
    clearSearchTerm: (state, action) => {
      return "";
    },
  },
});

// export action creators
export const { setSearchTerm, clearSearchTerm } = searchTermReducer.actions;

// export reducer
export default searchTermReducer.reducer;

// export const searchTermReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "searchTerm/setSearchTerm":
//       return action.payload;
//     case "searchTerm/clearSearchTerm":
//       return "";
//     default:
//       return state;
//   }
// };

// export function setSearchTerm(term) {
//   return {
//     type: "searchTerm/setSearchTerm",
//     payload: term,
//   };
// }

// export function clearSearchTerm() {
//   return {
//     type: "searchTerm/clearSearchTerm",
//   };
// }

export const selectSearchTerm = (state) => state.searchTerm;
