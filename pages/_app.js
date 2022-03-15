import { useEffect } from "react";
import "../styles/globals.css";
import smoothscroll from "smoothscroll-polyfill";
import { motion } from "framer-motion";
import RecipeState from "@/context/RecipeState";
import Script from "next/script";

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="ga-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <RecipeState>
        <Component {...pageProps} />
      </RecipeState>
    </motion.div>
  );
}

export default MyApp;
