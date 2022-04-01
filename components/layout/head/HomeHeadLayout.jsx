import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const HomeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Recipe Ideas for Toddlers & Beyond | The Hungry Baby Blog</title>
        <meta
          name="description"
          content="Make mealtime fun and stress-free with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. Get ideas for Indian recipes for toddlers and fun meal ideas that you can try no matter where you are."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Recipe Ideas for Toddlers | The Hungry Baby Blog"
        />
        <meta
          property="og:description"
          content="Recipe ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert recipe ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are."
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
                  "Meal ideas for toddlers and beyond. Make mealtime fun with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. While a lot of the posts focus on Indian recipes for toddlers, you will also find a whole bunch of easy and fun meal ideas that you can try no matter where you are.",
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

export default HomeHeadLayout;
