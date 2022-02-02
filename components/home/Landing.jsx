import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <div className="relative m-0 lg:m-10 h-screen">
        <Image
          src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-landing_pNAQpamkh.jpg"
          alt="The Hungry Baby Blog hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thubb-landing_pNAQpamkh.jpg/tr:bl-10"
          className="-z-10 rounded-lg"
        />
        <div className="flex justify-center items-center h-screen">
          <div className="mx-3 p-10 bg-white bg-opacity-50 rounded-lg">
            <h1 className="uppercase">The Hungry Baby blog</h1>
            <p className="mt-7 text-2xl font-bold">
              Yummy recipes for a nutritious, filling and fun meal for your
              child
            </p>
            <button className="mt-7 bg-pink-600 text-white text-xl font-bold h-12 w-44 uppercase rounded-lg">
              <span className="animate-pulse">Coming Soon</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
