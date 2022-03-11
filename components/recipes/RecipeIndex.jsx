import React from "react";
import Link from "next/link";
import Image from "next/image";
import recipeIndex from "@/utils/recipeIndex";

const RecipeIndex = () => {
  return (
    <div className="mx-5 mb-20 pt-36">
      <div className="heading-container">
        <div className="max-w-max">
          <h1>Recipe Index</h1>
          <div className="heading-underline"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="mx-5 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2">
            {recipeIndex.map((recipe, index) => (
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl lg:h-[400px] lg:w-[400px]">
                <Link
                  key={index}
                  href={"/recipes/" + recipe.mealType.toLowerCase()}
                >
                  <a>
                    <Image
                      src={recipe.image}
                      alt={`${recipe.title} recipes`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={recipe.image + "/tr:bl-10"}
                      className="image-hover-scale"
                    />
                    <div className="absolute top-1/2 left-1/2 max-w-max -translate-y-1/2 -translate-x-1/2 rounded-xl bg-black bg-opacity-70 p-5 text-2xl font-bold uppercase tracking-wide text-white shadow-2xl">
                      {recipe.mealType == "All"
                        ? recipe.mealType + " Recipes"
                        : recipe.mealType}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeIndex;
