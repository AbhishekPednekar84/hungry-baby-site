import { useEffect } from "react";
import "../styles/globals.css";
import smoothscroll from "smoothscroll-polyfill";
import { motion } from "framer-motion";
import RecipeState from "@/context/RecipeState";

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <motion.div
      key={router.route}
      variants={pageVariants}
      initial="pageInitial"
      animate="pageAnimate"
    >
      <RecipeState>
        <Component {...pageProps} />
      </RecipeState>
    </motion.div>
  );
}

export default MyApp;
