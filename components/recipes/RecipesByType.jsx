import React, { useEffect, useContext, useMemo } from "react";
import RecipeContext from "@/context/recipeContext";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { searchIcon } from "@/utils/svgs";

// Component imports
import RecipeCard from "./RecipeCard";
import SkeletonCard from "../common/SkeletonCard";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const RecipesByType = ({ mealType, tagType }) => {
  const recipeContext = useContext(RecipeContext);

  const {
    loading,
    loadedRecipes,
    loadRecipes,
    loadRecipesFromPrimaryTag,
    searchRecipes,
    searchRecipesByPrimaryTag,
    setLoading,
  } = recipeContext;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scroll({ top: 1, left: 1, behavior: "smooth" });
    }
  }, []);

  const handleChange = (e) => {
    if (tagType == "primary")
      searchRecipesByPrimaryTag(mealType.toLowerCase(), e.target.value);

    if (tagType == "secondary")
      searchRecipes(mealType.toLowerCase(), e.target.value);
  };

  const debouncedSearch = useMemo(() => debounce(handleChange, 300));

  useEffect(() => {
    debouncedSearch.cancel();
  }, []);

  useEffect(() => {
    setLoading();
    if (tagType === "primary") {
      loadRecipesFromPrimaryTag(mealType);
    }

    if (tagType === "secondary") {
      loadRecipes(mealType);
    }
  }, []);

  if (loading) {
    return (
      <div className="mx-5 mt-36 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:items-start md:justify-center lg:mx-10 lg:grid-cols-4 lg:gap-16">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="mb-20">
      <div className="mb-16 flex w-full justify-center">
        <div className="flex items-center gap-2">
          {searchIcon}
          <input
            type="text"
            onChange={handleChange}
            placeholder={`Search recipes`}
            className="remove-default-focus w-[275px] border-b-2 border-b-pink-600 py-2 text-xl placeholder-pink-700 md:w-[400px]"
          />
        </div>
      </div>

      {loadedRecipes && loadedRecipes.length === 0 && (
        <div className="mt-20 text-center text-2xl text-gray-600">
          <p>Sorry, nothing here :(</p>
        </div>
      )}

      <motion.div
        layout
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-5 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:items-start md:justify-center lg:mx-10 lg:grid-cols-4 lg:gap-16"
      >
        {loadedRecipes &&
          loadedRecipes.length > 0 &&
          loadedRecipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} index={index} />;
          })}
      </motion.div>
    </div>
  );
};

RecipesByType.propTypes = {
  pathname: PropTypes.string,
};

export default RecipesByType;
