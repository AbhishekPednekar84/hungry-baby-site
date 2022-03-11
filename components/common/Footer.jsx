import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-b from-pink-50 via-pink-300 to-pink-400 pb-20 print:hidden">
      <div class="footer-curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-28">
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thbb-logo_lxSkWfFuN8.png"
            alt="The Hungry Baby Blog Logo"
            width={200}
            height={100}
          />
        </div>

        <p className="my-5 px-5 text-center text-xl font-bold">
          &copy; {new Date().getFullYear()} - hungrybabyblog.com - All rights
          reserved
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-y-16 lg:w-[600px] lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <h3 className="mb-7 text-center text-3xl">Recipes</h3>
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
              <Link href="/recipes/dessert">
                <a className="hover-link text-lg font-bold">Dessert</a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-center text-3xl">Quick Links</h3>
            <div className="grid grid-cols-1 place-items-center gap-x-10 gap-y-7">
              <Link href="/about">
                <a className="hover-link text-lg font-bold">Team HuBB</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
