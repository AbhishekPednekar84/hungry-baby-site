import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <div className="relative m-0 h-full ">
        <Image
          src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-landing_pNAQpamkh.jpg"
          alt="The Hungry Baby Blog hero image"
          priority={true}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-landing_pNAQpamkh.jpg/tr:bl-10"
          className="-z-10 rounded-lg"
        />
        <div className="flex h-screen items-center justify-center">
          <header className="z-10 mx-3 rounded-lg bg-white bg-opacity-50 p-5 lg:w-[800px] lg:p-10">
            <h1 className="margin-0 font-black">Recipe ideas for toddlers</h1>
            <p className="mt-7 text-2xl font-bold lg:text-3xl">
              Explore a range of nutritious, filling and fun meals for your
              toddler and you to enjoy together
            </p>
            <div className="grid w-[100%] grid-cols-2 md:w-[70%]">
              <button
                className="primary-button mt-7 h-12 w-40 md:w-48"
                onClick={() => router.push("#latest-recipes")}
              >
                Latest Recipes
              </button>

              <button
                className="secondary-button mt-7 h-12 w-40 md:w-48"
                onClick={() => router.push("/recipes")}
              >
                All Recipes
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Landing;
