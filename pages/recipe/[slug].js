import React from "react";
import axios from "axios";

// Component imports
import FullRecipeHeadLayout from "@/components/layout/head/FullRecipeHeadLayout";
import Navbar from "@/components/common/Navbar";
import FullRecipe from "@/components/recipes/FullRecipe";
import Layout from "@/components/layout/Layout";

const Recipe = ({ recipe }) => {
  return (
    <FullRecipeHeadLayout recipe={recipe}>
      <Layout>
        <FullRecipe recipe={recipe} />
      </Layout>
    </FullRecipeHeadLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`${process.env.API_URL}/recipe/${params.slug}`);

  if (res.data === {}) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recipe: res.data,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.API_URL}/recipes/all`);

  const recipes = res.data;

  const paths = recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Recipe;
