import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const NotFound = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipe/random`)
      .then((res) => setRecipe(res.data));
  }, []);

  const router = useRouter();

  if (recipe && recipe) {
    return (
      <div className="relative h-screen">
        <Image
          src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thbb-404_0UAN8uCE0.jpg"
          alt="Page Not Found"
          layout="fill"
          placeholder="blur"
          blurDataURL="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thbb-404_0UAN8uCE0.jpg/tr:bl-10"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute flex h-screen w-screen flex-col items-center justify-center">
          <div className="rounded-xl bg-white bg-opacity-50 p-4 md:p-10">
            <h1 className="md:text-center">Recipe not found!</h1>
            <p className="my-2 text-2xl font-semibold md:my-5 md:text-center">
              You've stumbled upon an empty dish
            </p>

            <div className="z-10">
              <p className="mb-2">A recipe you might be interested in?</p>

              <Link href={`/recipe/${recipe.slug}`}>
                <a className="cursor-pointer overflow-hidden">
                  <div className="relative h-[250px] w-full ">
                    <Image
                      src={recipe.featured_image}
                      alt="Selected recipe"
                      layout="fill"
                      objectFit="cover"
                      className="overflow-hidden transition-all duration-200 ease-in-out hover:scale-110"
                    />
                    <p className="absolute top-1 left-1 bg-black bg-opacity-40 p-2 font-semibold text-white">
                      {recipe.title}
                    </p>
                  </div>
                </a>
              </Link>
            </div>

            <div className="mt-5 text-center">
              <button
                className="primary-button h-12 w-32"
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default NotFound;
