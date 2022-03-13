import React from "react";
import axios from "axios";

// Component imports
import Landing from "@/components/home/Landing";
import HomeHeadLayout from "@/components/layout/head/HomeHeadLayout";
import LatestRecipes from "@/components/home/LatestRecipes";
import Layout from "@/components/layout/Layout";

export default function Home({ posts }) {
  return (
    <HomeHeadLayout>
      <Layout>
        <section>
          <Landing />
        </section>
        <section id="latest-recipes">
          <LatestRecipes posts={posts} />
        </section>
      </Layout>
    </HomeHeadLayout>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/recipes/all`);

  return {
    props: {
      posts: res.data,
    },
    revalidate: 30,
  };
};
