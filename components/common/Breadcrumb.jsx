import React from "react";
import Link from "next/link";
import { chevronRightIcon } from "@/utils/svgs";
import { motion } from "framer-motion";

const variants = {
  tap: { y: "2px" },
};

const Breadcrumb = ({ primaryTag }) => {
  return (
    <div className="flex items-center justify-start pt-32 pb-12 print:hidden">
      <Link href="/">
        <motion.a
          variants={variants}
          whileTap="tap"
          className="cursor-pointer rounded-md bg-brandColor p-2 text-sm font-semibold uppercase text-white hover:bg-pink-800"
        >
          Home
        </motion.a>
      </Link>

      <div>{chevronRightIcon}</div>

      <Link href={`/recipe/category/${primaryTag.toLowerCase()}`}>
        <motion.a
          variants={variants}
          whileTap="tap"
          className="cursor-pointer rounded-md bg-brandColor p-2 text-sm font-semibold uppercase text-white hover:bg-pink-800"
        >
          {primaryTag}
        </motion.a>
      </Link>
    </div>
  );
};

export default Breadcrumb;
