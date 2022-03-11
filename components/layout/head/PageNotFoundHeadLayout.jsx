import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const PageNotFoundHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Yummy recipes for toddlers and up. Make mealtime fun with our healthy and yummy recipes. Breakfast, lunch, dinner or snacks, we've got you covered. A new recipe will be posted every week."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yummy Recipes for Toddlers" />
        <meta
          property="og:description"
          content="Yummy recipes for toddlers and up. Make mealtime fun with our healthy and yummy recipes. Breakfast, lunch, dinner or snacks, we've got you covered. A new recipe will be posted every week."
        />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default PageNotFoundHeadLayout;
