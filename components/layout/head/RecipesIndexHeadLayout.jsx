import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const RecipesIndexHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Check out our recipe index</title>
        <meta
          name="description"
          content="Are you stressed out looking for new recipe ideas for your toddler? Try our healthy and easy to make recipes that you and your toddler can enjoy together."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Check out our recipe index" />
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
                  "Meal ideas for toddlers and beyond. Make mealtime fun and stress-free with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. Get ideas for Indian recipes for toddlers and fun meal ideas that you can try no matter where you are.",
                "genre": "Blog"
              }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default RecipesIndexHeadLayout;
