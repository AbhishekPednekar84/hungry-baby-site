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
        )} recipes for toddlers and beyond`}</title>
        <meta
          name="description"
          content="Are you stressed out looking for new recipe ideas for your toddler? Try our healthy and easy to make recipes that you and your toddler can enjoy together."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recipe Ideas for Toddlers" />
        <meta
          property="og:description"
          content="Are you stressed out looking for new recipe ideas for your toddler? Try our healthy and easy to make recipes that you and your toddler can enjoy together."
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
                "Make mealtime fun and stress-free with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. Get ideas for Indian recipes for toddlers and fun meal ideas that you can try no matter where you are.",
                "genre": "Blog",
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
