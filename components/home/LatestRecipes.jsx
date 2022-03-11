import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

// Component imports
import WavesTop from "../style/WavesTop";

const LatestRecipes = ({ posts }) => {
  return (
    <Fragment>
      <div className="bg-gradient-to-b from-zinc-100 via-slate-50 to-white pt-20 pb-20 pr-0">
        <div className="heading-container">
          <div className="max-w-max">
            <h2 className="pb-2 text-center text-5xl">Latest Grub</h2>
            <div className="heading-underline"></div>
          </div>
        </div>

        {posts.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="mx-5 text-2xl text-gray-600">
              Something utterly utterly delicious will be here soon!
            </p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="flex items-center justify-center">
            <div className="card-container horizontal-scrollbar">
              {posts.slice(0, 5).map((post, index) => {
                return (
                  <Link href={`/recipe/${post.slug}`} key={index}>
                    <a aria-label="Click to view full recipe">
                      <div className="card">
                        <div className="flex justify-center">
                          <Image
                            src={post.featured_image}
                            alt={`Latest-recipe ${index}`}
                            height={250}
                            width={350}
                            className="rounded-tl-3xl rounded-tr-3xl object-cover object-center"
                          />
                        </div>
                        <div className="mt-5 px-3">
                          <h3 className="font-extrabold">{post.title}</h3>
                          <p className="mt-2 text-gray-600">{post.excerpt}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LatestRecipes;

LatestRecipes.propTypes = {
  posts: PropTypes.array,
};
