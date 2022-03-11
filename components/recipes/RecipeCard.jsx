import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const RecipeCard = ({ recipe, index }) => {
  const router = useRouter();

  return (
    <motion.div
      key={index}
      layout
      className="w-[300px] cursor-pointer overflow-x-hidden rounded-xl border-2 border-pink-100 bg-white shadow-lg hover:shadow-2xl"
      onClick={() => router.push(`/recipe/${recipe.slug}`)}
    >
      <div className="relative h-[200px] w-[300px]">
        <Image
          src={recipe.featured_image}
          alt={recipe.title + " image"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="image-hover-scale"
        />
      </div>
      <div className="px-3 py-2">
        <h3 className="my-2">{recipe.title}</h3>
        <p className="my-2 text-sm text-gray-500">
          {recipe.excerpt.length < 65
            ? recipe.excerpt
            : recipe.excerpt.slice(0, 66) + "..."}
        </p>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
