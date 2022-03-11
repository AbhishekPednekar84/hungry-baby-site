import { LOADING, LOAD_RECIPES, SEARCH_RECIPES } from "./Types";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        loadedRecipes: action.payload,
        loading: false,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        loadedRecipes: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default recipeReducer;
