import React from "react";
import RecipesIndexHeadLayout from "@/components/layout/head/RecipesIndexHeadLayout";

// Component imports
import Navbar from "@/components/common/Navbar";
import RecipeIndex from "@/components/recipes/RecipeIndex";
import Layout from "@/components/layout/Layout";

const Recipes = () => {
  return (
    <RecipesIndexHeadLayout>
      <Layout>
        <RecipeIndex />
      </Layout>
    </RecipesIndexHeadLayout>
  );
};

export default Recipes;
