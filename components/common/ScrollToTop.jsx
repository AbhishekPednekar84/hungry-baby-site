import React, { useState, useEffect } from "react";
import { arrowUpIcon } from "@/utils/svgs";
import { motion } from "framer-motion";

const variants = {
  tap: { y: "2px" },
};

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollOn = window.scrollY > 200;

    if (scrollOn) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  if (scroll) {
    return (
      <motion.div
        variants={variants}
        whileTap="tap"
        className="fixed bottom-5 right-5 h-10 w-10 cursor-pointer rounded-full bg-pink-600 p-2 text-pink-100 shadow-xl transition-colors ease-in hover:bg-pink-800"
        onClick={scrollToTop}
      >
        {arrowUpIcon}
      </motion.div>
    );
  } else {
    return null;
  }
};

export default ScrollToTop;
