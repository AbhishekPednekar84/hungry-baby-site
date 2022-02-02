import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const HomeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Yummy Recipes for Toddlers</title>
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
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "dateCreated": "22-01-2022",
                "url": "https://rentorsale.apartments",
                "description":
                  "Find flats for rent or sale in your dream apartment. We provide a quick and easy way for owners to list their flats for rent or sale. Want to know if there is a flat for rent in that apartment you have in mind? Just search for the name of the apartment and find out!",
                "genre": "Website for an online marketplace",
                "keywords":
                  "rent, flats, apartments, sell, 1BHK, 2BHK, 3BHK, to-let"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "datePublished": "22-01-2022",
                "dateModified": "22-01-2022",
                "url": "https://rentorsale.apartments/",
                "description":
                  "Find flats for rent or sale in your dream apartment. We provide a quick and easy way for owners to list their flats for rent or sale. Want to know if there is a flat for rent in that apartment you have in mind? Just search for the name of the apartment and find out!",
                "name": "Find Flats for Rent in your Dream Apartment",
                "inLanguage": "en",
                "isPartOf": "https://rentorsale.apartments",
                "potentialAction": {
                  "@type": "ReadAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://rentorsale.apartments"
                  }
                }
              }
            ]`,
          }}
        /> */}
      </Head>
      {props.children}
    </Fragment>
  );
};

export default HomeHeadLayout;
