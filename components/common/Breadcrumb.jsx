import React from "react";
import Link from "next/link";
import { chevronRightIcon } from "@/utils/svgs";
import { motion } from "framer-motion";

const variants = {
  tap: { y: "2px" },
};

const Breadcrumb = ({ primaryTag }) => {
  return (
    <div className="flex items-center justify-center pt-32 pb-12 print:hidden">
      <Link href="/">
        <motion.a
          variants={variants}
          whileTap="tap"
          className="cursor-pointer rounded-md  p-2 text-sm font-semibold uppercase transition-all duration-300 hover:bg-brandColor hover:text-white"
        >
          Home
        </motion.a>
      </Link>

      <div>{chevronRightIcon}</div>

      <Link href={`/recipe/category/${primaryTag.toLowerCase()}`}>
        <motion.a
          variants={variants}
          whileTap="tap"
          className="cursor-pointer rounded-md p-2 text-sm font-semibold uppercase hover:bg-brandColor hover:text-white"
        >
          {primaryTag}
        </motion.a>
      </Link>
    </div>
  );
};

export default Breadcrumb;
