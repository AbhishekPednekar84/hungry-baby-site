import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: "-1000vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Navbar = () => {
  return (
    <nav>
      <div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="absolute z-30 px-3 lg:px-12 py-3 lg:py-2"
        >
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/thbb-logo_lxSkWfFuN8.png"
            alt="The Hungry Baby Blog Logo"
            width={200}
            height={100}
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
