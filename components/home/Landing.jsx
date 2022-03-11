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
          <header className="z-10 mx-3 rounded-lg bg-white bg-opacity-50 p-5 lg:p-10">
            <h1 className="margin-0 font-black uppercase">
              The Hungry Baby blog
            </h1>
            <p className="mt-7 text-3xl font-bold">
              Nutritious, filling and fun recipe ideas for toddlers and beyond
            </p>
            <button
              className="primary-button mt-7 h-12 w-48"
              onClick={() => router.push("#latest-recipes")}
            >
              Latest Recipes
            </button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Landing;
