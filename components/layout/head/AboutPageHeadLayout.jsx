import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const AboutPageHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          Hello from Team HuBB | The Genesis of The Hungry Baby Blog
        </title>
        <meta
          name="description"
          content="Hey there, we are Aparna and Abhishek a.k.a Team HuBB
                    . We are IT professionals from Bangalore, proud parents of
                    our 19-month-old darling daughter and creators of The Hungry
                    Baby Blog (HuBB). We want to lead off by saying that we’re
                    no experts or hold no formal degrees in child nutrition.
                    Whatever we know is through hours of reading articles or
                    watching videos created by individuals who are stalwarts in
                    this field. We vet and taste every recipe and post it only
                    after getting a sign off from an opinionated little expert
                    taste tester."
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hello From Team HuBB | The Genesis of The Hungry Baby Blog"
        />
        <meta
          property="og:description"
          content="Hey there, we are Aparna and Abhishek a.k.a Team HuBB
                    . We are IT professionals from Bangalore, proud parents of
                    our 19-month-old darling daughter and creators of The Hungry
                    Baby Blog (HuBB). We want to lead off by saying that we’re
                    no experts or hold no formal degrees in child nutrition.
                    Whatever we know is through hours of reading articles or
                    watching videos created by individuals who are stalwarts in
                    this field. We vet and taste every recipe and post it only
                    after getting a sign off from an opinionated little expert
                    taste tester."
        />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />

        <meta
          property="og:image"
          content="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Team_HuBB_n0SpVzP95.jpeg"
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
                "genre": "Blog",
                "keywords":
                  "meal ideas of toddlers, indian meal ideas for toddlers, meal idea for pre-schoolers"
              },
              {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "lastReviewed": "2022-03-12",
                "about": "Hey there, we are Aparna and Abhishek a.k.a Team HuBB
                    . We are IT professionals from Bangalore, proud parents of
                    our 19-month-old darling daughter and creators of The Hungry
                    Baby Blog (HuBB). We want to lead off by saying that we’re
                    no experts or hold no formal degrees in child nutrition.
                    Whatever we know is through hours of reading articles or
                    watching videos created by individuals who are stalwarts in
                    this field. We vet and taste every recipe and post it only
                    after getting a sign off from an opinionated little expert
                    taste tester.",
                "url": "https://www.hungrybabyblog.com/about"
              }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default AboutPageHeadLayout;
