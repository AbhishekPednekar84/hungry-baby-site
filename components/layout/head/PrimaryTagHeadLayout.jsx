import React, { Fragment } from "react";
import Head from "next/head";

// Component imports
import CommonHeadLayout from "./CommonHeadLayout";

const PrimaryTagHeadLayout = ({ children, mainTag }) => {
  const formattedString = (word) => {
    return word.split("")[0].toUpperCase() + word.split("").join("").slice(1);
  };

  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>{`${formattedString(
          mainTag
        )} Recipes for Toddlers and Beyond`}</title>
        <meta
          name="description"
          content={`${formattedString(
            mainTag
          )} ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are.`}
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recipe Ideas for Toddlers" />
        <meta
          property="og:description"
          content={`${formattedString(
            mainTag
          )} ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are.`}
        />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "dateCreated": "22-02-2022",
                "url": "https://hungrybabyblog.com",
                "description":
                {${formattedString(
                  mainTag
                )} ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are.},
                "genre": "Blog",
                "keywords":
                  {${formattedString(
                    mainTag
                  )} ideas of toddlers, indian meal ideas for toddlers, meal idea for pre-schoolers
              }
            ]`,
          }}
        />
      </Head>
      {children}
    </Fragment>
  );
};

export default PrimaryTagHeadLayout;