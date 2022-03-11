import { useReducer } from "react";
import recipeReducer from "./recipeReducer";
import RecipeContext from "./recipeContext";
import { LOADING, LOAD_RECIPES, SEARCH_RECIPES, SITE_ERROR } from "./Types";
import axios from "axios";

const RecipeState = ({ children }) => {
  const initialState = {
    loading: false,
    loadedRecipes: [],
    siteError: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const loadRecipes = async (mealType) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipe/tag/${mealType}`
      );

      if (res.status === 200) {
        dispatch({ type: LOAD_RECIPES, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: SITE_ERROR, payload: err.response.data.detail });
    }
  };

  const loadRecipesFromPrimaryTag = async (primaryTag) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipe/primary_tag/${primaryTag}`
      );

      if (res.status === 200) {
        dispatch({ type: LOAD_RECIPES, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: SITE_ERROR, payload: err.response.data.detail });
    }
  };

  const searchRecipes = async (mealType, searchText) => {
    if (!searchText) searchText = "%";

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipe/search/${searchText}/${mealType}`
      );

      if (res.status === 200) {
        dispatch({ type: SEARCH_RECIPES, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: SITE_ERROR, payload: err.response.data.detail });
    }
  };

  const searchRecipesByPrimaryTag = async (primaryTag, searchText) => {
    if (!searchText) searchText = "%";

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipe/search/primary/${searchText}/${primaryTag}`
      );

      if (res.status === 200) {
        dispatch({ type: SEARCH_RECIPES, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: SITE_ERROR, payload: err.response.data.detail });
    }
  };

  const setLoading = () => {
    return dispatch({ type: LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        loadedRecipes: state.loadedRecipes,
        siteError: state.siteError,
        loading: state.loading,
        setLoading,
        loadRecipes,
        searchRecipes,
        searchRecipesByPrimaryTag,
        loadRecipesFromPrimaryTag,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
