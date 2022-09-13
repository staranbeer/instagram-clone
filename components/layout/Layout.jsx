import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-[60px] bg-gray-100 ">{children}</div>
    </>
  );
};

export default Layout;
