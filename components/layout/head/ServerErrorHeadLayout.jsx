import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const ServerErrorHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Houston, we have a problem!</title>
        <meta
          name="description"
          content="Recipe ideas for toddlers and beyond. Make mealtime fun and stress-free with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. Get ideas for Indian recipes for toddlers and fun meal ideas that you can try no matter where you are."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yummy Recipes for Toddlers" />
        <meta
          property="og:description"
          content="Recipe ideas for toddlers and beyond. Make mealtime fun and stress-free with our easy, healthy and delicious recipes. Explore breakfast, lunch, dinner, snack or dessert ideas for your child. Get ideas for Indian recipes for toddlers and fun meal ideas that you can try no matter where you are."
        />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-icon_zoCbYRVTO.png"
        />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default ServerErrorHeadLayout;
