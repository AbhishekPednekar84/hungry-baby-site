import React from "react";
import axios from "axios";

// Component imports
import RecipesByType from "@/components/recipes/RecipesByType";
import CategoryHeading from "@/components/common/CategoryHeading";
import BackToIndex from "@/components/recipes/BackToIndex";
import PrimaryTagHeadLayout from "@/components/layout/head/PrimaryTagHeadLayout";
import Layout from "@/components/layout/Layout";

const Category = ({ mainTag }) => {
  return (
    <PrimaryTagHeadLayout mainTag={mainTag}>
      <Layout>
        <BackToIndex />
        <CategoryHeading heading={mainTag} />
        <RecipesByType mealType={mainTag} tagType="primary" />
      </Layout>
    </PrimaryTagHeadLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/verify/tag/${params.mainTag.toLowerCase()}`
  );

  if (res.data === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mainTag: params.mainTag,
    },
  };
};

export default Category;
