import React, { Fragment } from "react";
import Head from "next/head";

// Component imports
import CommonHeadLayout from "./CommonHeadLayout";

const MealTypeHeadLayout = ({ children, mealType }) => {
  const formattedString = (word) => {
    if (word === "snacks") word = "snack";

    if (word === "desserts") word = "dessert";

    return word.split("")[0].toUpperCase() + word.split("").join("").slice(1);
  };

  const titleText = "Recipes for Toddlers and Beyond";

  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          {mealType === "all"
            ? titleText
            : `${formattedString(mealType)} Recipes for Toddlers and Beyond`}
        </title>
        <meta
          name="description"
          content={`Are you stressed out looking for new ${formattedString(
            mealType
          )} recipe ideas for your toddler? Try our healthy and easy ${formattedString(
            mealType
          )} recipes for the entire family to enjoy.`}
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            mealType === "all"
              ? titleText
              : `${formattedString(mealType)} recipes for toddlers and beyond`
          }
        />
        <meta
          property="og:description"
          content={`Are you stressed out looking for new ${formattedString(
            mealType
          )} recipe ideas for your toddler? Try our healthy and easy ${formattedString(
            mealType
          )} recipes for the entire family to enjoy.`}
        />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-icon_zoCbYRVTO.png"
        />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
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
                "Make ${mealType} fun and stress-free with our easy, healthy and delicious recipes. Explore ${mealType} options for your child. Get ideas for Indian ${mealType} recipes for toddlers and other fun meal ideas that you can try no matter where you are.",
                "genre": "Blog"
              }
            ]`,
          }}
        />
      </Head>
      {children}
    </Fragment>
  );
};

export default MealTypeHeadLayout;
