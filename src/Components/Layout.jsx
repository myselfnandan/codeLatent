import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CodeHeader from "./CodeHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <CodeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
