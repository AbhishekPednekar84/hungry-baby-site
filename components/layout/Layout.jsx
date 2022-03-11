import React from "react";

// Component imports
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
