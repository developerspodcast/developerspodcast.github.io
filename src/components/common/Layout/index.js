import React from "react";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="content">{children}</div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
