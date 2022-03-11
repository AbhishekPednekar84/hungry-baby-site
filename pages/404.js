import React from "react";
import axios from "axios";

//Component imports
import NotFound from "@/components/common/NotFound";
import Navbar from "@/components/common/Navbar";
import PageNotFoundHeadLayout from "@/components/layout/head/PageNotFoundHeadLayout";

const PageNotFound = ({ recipe }) => {
  return (
    <PageNotFoundHeadLayout>
      <Navbar />
      <NotFound recipe={recipe} />
    </PageNotFoundHeadLayout>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/recipe/random`);

  return {
    props: {
      recipe: res.data,
    },
  };
};

export default PageNotFound;
