import { useEffect } from "react";
import "../styles/globals.css";
import smoothscroll from "smoothscroll-polyfill";
import { motion } from "framer-motion";

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
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
