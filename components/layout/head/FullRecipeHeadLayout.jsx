import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const FullRecipeHeadLayout = ({ children, recipe }) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>{recipe.title} | The Hungry Baby Blog</title>
        <meta name="description" content={`${recipe.excerpt}`} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${recipe.title}`} />
        <meta property="og:description" content={`${recipe.excerpt}`} />
        <meta property="og:url" content="https://hungrybabyblog.com" />
        <meta property="og:site_name" content="The Hungry Baby Blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
              {
                "@context": "https://schema.org",
                "@type": "Recipe",
                "name": ${'"' + recipe.title + '"'},
                "image": ${'"' + recipe.featured_image + '"'},
                "author": ${'"' + recipe.author + '"'},
                "datePublished": ${'"' + recipe.date_published + '"'},
                "description": ${'"' + recipe.excerpt + '"'},
                "recipeIngredient": ${'"' + recipe.ingredients + '"'},
                "cookTime": ${'"' + "PT" + recipe.cook_time + "M" + '"'},
                "prepTime": ${'"' + "PT" + recipe.prep_time + "M" + '"'},
                "recipeInstructions": ${'"' + recipe.procedure + '"'},
                "keywords": ${'"' + recipe.tags + '"'},
                "url": ${
                  '"' + "https://hungrybabyblog.com/recipe/" + recipe.slug + '"'
                }
              }
            ]`,
          }}
        />
      </Head>
      {children}
    </Fragment>
  );
};

export default FullRecipeHeadLayout;
