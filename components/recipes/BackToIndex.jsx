import React from "react";
import Link from "next/link";
import { backIcon } from "@/utils/svgs";
import { motion } from "framer-motion";

const variants = {
  tap: { y: "2px" },
};

const BackToIndex = () => {
  return (
    <div className="flex items-center justify-center gap-2 pt-36">
      <Link href="/recipes">
        <motion.a
          variants={variants}
          whileTap="tap"
          className="flex cursor-pointer items-center gap-x-2 rounded-md p-2 text-sm font-semibold uppercase transition-all duration-300 hover:bg-brandColor hover:text-white"
        >
          {backIcon} Back To Recipes
        </motion.a>
      </Link>
    </div>
  );
};

export default BackToIndex;
