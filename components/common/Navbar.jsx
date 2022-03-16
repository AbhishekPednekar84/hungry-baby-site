import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { menuIcon, cancelIcon } from "@/utils/svgs";

// Component imports
import Backdrop from "./Backdrop";
import SocialChannels from "./SocialChannels";

const variants = {
  initial: {
    x: "-1000vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  initialNav: { x: "100vw" },
  animateNav: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exitNav: {
    x: "100vw",
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="absolute z-50 w-full print:hidden">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a aria-label="Click on logo to navigate to the home page">
              <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                className="absolute top-2 left-2"
              >
                <Image
                  src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Logo_UUDYpbJVV.svg"
                  alt="The Hungry Baby Blog Logo"
                  width={200}
                  height={100}
                />
              </motion.div>
            </a>
          </Link>
        </div>

        {/* For medium and large screens */}
        <div className="mt-10 hidden md:block">
          <ul className="flex justify-evenly">
            {router.pathname === "/" && (
              <>
                <li className="mx-5">
                  <Link href="/recipes">
                    <a className="nav-link">Recipes</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/about">
                    <a className="nav-link normal-case">TEAM HuBB</a>
                  </Link>
                </li>
              </>
            )}

            {router.pathname === "/about" && (
              <>
                <li className="mx-5">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/recipes">
                    <a className="nav-link">Recipes</a>
                  </Link>
                </li>
              </>
            )}

            {/* {router.pathname.includes("/recipe/") && (
              <>
                <li className="mx-5">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/recipes">
                    <a className="nav-link">Recipes</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/">
                    <a className="nav-link normal-case">TEAM HuBB</a>
                  </Link>
                </li>
              </>
            )} */}

            {router.pathname === "/recipes" && (
              <>
                <li className="mx-5">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/about">
                    <a className="nav-link normal-case">TEAM HuBB</a>
                  </Link>
                </li>
              </>
            )}

            {(router.pathname.includes("/recipes/[type]") ||
              router.pathname === "/recipe/[slug]" ||
              router.pathname.includes("category")) && (
              <>
                <li className="mx-5">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/recipes">
                    <a className="nav-link">Recipes</a>
                  </Link>
                </li>
                <li className="mx-5">
                  <Link href="/about">
                    <a className="nav-link normal-case">TEAM HuBB</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {!showMenu && (
        <div className="absolute top-8 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-pink-50 p-2 shadow-xl md:hidden">
          <span onClick={() => setShowMenu(true)}>{menuIcon}</span>
        </div>
      )}

      <AnimatePresence exitBeforeEnter>
        {showMenu && (
          <Backdrop onClick={() => setShowMenu(false)}>
            <motion.div
              variants={variants}
              initial="initialNav"
              animate="animateNav"
              exit="exitNav"
              className="from fixed top-0 right-0 h-screen w-2/3 bg-zinc-200 bg-gradient-to-b via-slate-100 to-gray-50 px-5 py-10 shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-end pr-5">
                  {/* <Image src="/logo.png" alt="Logo" width={90} height={55} /> */}
                  <div
                    className="menu-icon -mt-2 -mr-5 bg-slate-700"
                    onClick={() => setShowMenu(false)}
                  >
                    <span className="absolute top-8 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-pink-50 bg-opacity-50 p-2 shadow-xl">
                      {cancelIcon}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 text-center">
                <Link href="/">
                  <a>
                    <Image
                      src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Logo_UUDYpbJVV.svg"
                      alt="Logo"
                      width={150}
                      height={85}
                    />
                  </a>
                </Link>
              </div>

              <ul className="pt-6 text-center">
                {router.pathname === "/" && (
                  <>
                    <li className="py-5">
                      <Link href="/recipes">
                        <a className="nav-link">Recipes</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/about">
                        <a className="nav-link normal-case">TEAM HuBB</a>
                      </Link>
                    </li>
                  </>
                )}

                {router.pathname === "/about" && (
                  <>
                    <li className="py-5">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/recipes">
                        <a className="nav-link">Recipes</a>
                      </Link>
                    </li>
                  </>
                )}

                {router.pathname === "/recipes" && (
                  <>
                    <li className="py-5">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/about">
                        <a className="nav-link normal-case">TEAM HuBB</a>
                      </Link>
                    </li>
                  </>
                )}

                {(router.pathname.includes("/recipes/[type]") ||
                  router.pathname === "/recipe/[slug]" ||
                  router.pathname.includes("category")) && (
                  <>
                    <li className="py-5">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/recipes">
                        <a className="nav-link">Recipes</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/about">
                        <a className="nav-link normal-case">TEAM HuBB</a>
                      </Link>
                    </li>
                  </>
                )}

                {/* {router.pathname === "/recipes" && (
                  <>
                    <li className="py-5">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="py-5">
                      <Link href="/about">
                        <a className="nav-link normal-case">TEAM HuBB</a>
                      </Link>
                    </li>
                  </>
                )} */}
                <div className="pt-20">
                  <SocialChannels iconSize={50} />
                </div>
              </ul>
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
