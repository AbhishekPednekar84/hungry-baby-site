import React from "react";
import recipeIndex from "@/utils/recipeIndex";

// Component imports
import RecipesByType from "@/components/recipes/RecipesByType";
import CategoryHeading from "@/components/common/CategoryHeading";
import BackToIndex from "@/components/recipes/BackToIndex";
import MealTypeHeadLayout from "@/components/layout/head/MealTypeHeadLayout";
import Layout from "@/components/layout/Layout";

const RecipeType = ({ mealType }) => {
  return (
    <MealTypeHeadLayout mealType={mealType}>
      <Layout>
        <BackToIndex />
        <CategoryHeading heading={mealType} />
        <RecipesByType mealType={mealType} tagType="secondary" />
      </Layout>
    </MealTypeHeadLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const validTags = recipeIndex.map((recipe) => recipe.mealType.toLowerCase());

  if (!validTags.includes(params.type.toLowerCase())) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tags: null,
      mealType: params.type.toLowerCase(),
    },
  };
};

export default RecipeType;
