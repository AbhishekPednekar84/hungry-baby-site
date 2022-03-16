import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heartIcon, rssIcon } from "@/utils/svgs";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-b from-pink-50 via-pink-100 to-pink-300 pb-14 print:hidden">
      <div className="footer-curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-28">
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Logo_UUDYpbJVV.svg"
            alt="The Hungry Baby Blog Logo"
            width={200}
            height={100}
          />
        </div>

        <p className="my-5 px-5 text-center text-xl font-bold">
          &copy; {new Date().getFullYear()} - hungrybabyblog.com - All rights
          reserved
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-y-16 lg:w-[960px] lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <h3 className="mb-7 text-center text-3xl font-extrabold">
              Recipes
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              <Link href="/recipes/all">
                <a className="hover-link text-lg font-bold">All Recipes</a>
              </Link>
              <Link href="/recipes/breakfast">
                <a className="hover-link text-lg font-bold">Breakfast</a>
              </Link>
              <Link href="/recipes/lunch">
                <a className="hover-link text-lg font-bold">Lunch</a>
              </Link>
              <Link href="/recipes/snacks">
                <a className="hover-link text-lg font-bold">Snacks</a>
              </Link>
              <Link href="/recipes/dinner">
                <a className="hover-link text-lg font-bold">Dinner</a>
              </Link>
              <Link href="/recipes/desserts">
                <a className="hover-link text-lg font-bold">Dessert</a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-center text-3xl font-extrabold">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 place-items-center gap-x-10 gap-y-7">
              <Link href="/about">
                <a className="hover-link text-lg font-bold">Team HuBB</a>
              </Link>

              <Link href="/rss.xml">
                <a
                  aria-label="Link to the RSS feed"
                  className="hover-link flex items-center text-lg font-bold"
                >
                  <span className="mr-1">RSS</span>
                  {rssIcon}
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-center text-3xl font-extrabold">
              Let's Get Social
            </h3>
            <div className="grid grid-cols-2 place-items-center">
              <Link href="https://pin.it/5JgQBsu" passHref={true}>
                <a target="_blank" className="hover-link text-lg font-bold">
                  <Image
                    src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/pinterest-1_W5nSHgjxu.svg"
                    alt="Link to our Pinterest board"
                    height={50}
                    width={50}
                  />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/thehungrybabyblog/"
                passHref={true}
              >
                <a target="_blank" className="hover-link text-lg font-bold">
                  <Image
                    src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/instagram-2-1_U_Vrl3Xkc.svg"
                    alt="Link to our Instagram page"
                    height={50}
                    width={50}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 flex items-center text-lg font-semibold">
          Made with{" "}
          <svg
            className="mx-0.5 h-6 w-6"
            fill="#DB2777"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          for all the lil' ones :)
        </p>
      </div>
    </div>
  );
};

export default Footer;
