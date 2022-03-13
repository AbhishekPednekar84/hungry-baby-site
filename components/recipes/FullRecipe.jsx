import React, { useEffect } from "react";
import Image from "next/image";
import {
  quotesIcon,
  clockIcon,
  basketIcon,
  chefHatIcon,
  notesIcon,
} from "@/utils/svgs";

// Component imports
import NutritionalValue from "./NutritionalValue";
import Breadcrumb from "../common/Breadcrumb";
import SocialShare from "./SocialShare";

const FullRecipe = ({ recipe }) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  const ISOPrepDuration = `PT${recipe.prep_time}M`;
  const ISOCookDuration = `PT${recipe.cook_time}M`;
  const ISOTotalDuration = `PT${recipe.total_time}M`;

  return (
    <>
      <div
        itemScope
        itemType="https://schema.org/Recipe"
        className="mx-5 flex items-start justify-center"
      >
        <article className="mx-2 mb-20 max-w-[700px]">
          <Breadcrumb primaryTag={recipe.primary_tag} />
          <h1 itemProp="name" className="mb-10 text-center">
            {recipe.title}
          </h1>

          <div className="relative mb-5 print:hidden">
            <span className="absolute -top-4 -left-3 -z-10">{quotesIcon}</span>
            <p
              itemProp="description"
              className="first-letter:float-left first-letter:mx-2 first-letter:text-6xl first-letter:font-bold"
            >
              {recipe.excerpt}
            </p>
          </div>

          <div>
            <SocialShare
              title={recipe.title}
              featuredImage={recipe.featured_image}
              excerpt={recipe.excerpt}
            />
          </div>

          <div className="flex flex-col justify-between print:hidden md:flex-row">
            <div
              itemProp="image"
              className="relative h-[450px] w-full overflow-hidden rounded-xl md:w-2/3"
            >
              <meta itemProp="image" content={recipe.featured_image}></meta>
              <Image
                src={recipe.featured_image}
                alt={`Image for ${recipe.title}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={recipe.featured_image + "/tr:bl-10"}
                className="image-hover-scale"
              />
            </div>
            <div className="relative mt-5 min-w-[150px] rounded-xl border-2 border-brandColor md:mt-0">
              <span className="absolute -top-5 -right-4">{clockIcon}</span>
              <ul className="flex h-20 flex-row items-center justify-around px-2 md:h-full md:flex-col md:justify-center">
                <li className="py-2 text-sm md:py-6 md:text-lg ">
                  <span className="font-bold">Prep</span>:{" "}
                  <meta
                    itemProp="prepTime"
                    content={`PT${recipe.prep_time}M`}
                  ></meta>
                  <time dateTime={ISOPrepDuration}>{recipe.prep_time}</time>{" "}
                  mins
                </li>
                <li className="py-2 text-sm md:py-6 md:text-lg ">
                  <span className="font-bold">Cook</span>:
                  <meta
                    itemProp="cookTime"
                    content={`PT${recipe.cook_time}M`}
                  ></meta>{" "}
                  <time dateTime={ISOCookDuration}>{recipe.cook_time}</time>{" "}
                  mins
                </li>
                <li className="py-2 text-sm md:py-6 md:text-lg ">
                  <meta
                    itemProp="totalTime"
                    content={`PT${recipe.total_time}M`}
                  ></meta>{" "}
                  <span className="font-bold">Total</span>:{" "}
                  <time dateTime={ISOTotalDuration}>{recipe.total_time}</time>{" "}
                  mins
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 mx-10 border-2 border-brandColor print:hidden" />

          <div className="print:mb-10">
            <h2 className="mb-5">Ingredients</h2>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center py-2.5 print:py-1.5"
                >
                  <span className="mr-2">{basketIcon}</span>
                  <span itemProp="ingredients" className="font-semibold">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-10 mx-10 border-2 border-brandColor print:hidden" />

          <div>
            <h2 className="mb-5">Directions</h2>

            <div itemProp="recipeInstructions">
              {recipe.procedure.map((step, index) => (
                <div key={index} className="mb-8">
                  <h5 className="mb-1 flex items-center font-bold">
                    <span className="mr-2">{chefHatIcon}</span>
                    <span>Step {index + 1}</span>
                  </h5>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* {recipe.notes && (
            <div className="print:hidden">
              <hr className="my-10 mx-10 border-2 border-brandColor" />
              <div>
                <h2 className="mb-5">Notes</h2>

                <p>{recipe.notes}</p>
              </div>
            </div>
          )} */}

          <hr className="my-10 mx-10 border-2 border-brandColor print:hidden" />

          {recipe.notes && (
            <div className="print:hidden">
              <h2 className="mb-5">Notes</h2>

              <div>
                {recipe.notes.map((note, index) => (
                  <div key={index} className="mb-3 inline-flex items-center">
                    <span className="mr-2">{notesIcon}</span>

                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recipe.nutritional_value && (
            <div className="print:hidden">
              <hr className="my-10 mx-10 border-2 border-brandColor" />
              <NutritionalValue nutritionalValue={recipe.nutritional_value} />
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default FullRecipe;
