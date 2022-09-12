import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-[59px] bg-gray-100 pb-16">{children}</div>
    </>
  );
};

export default Layout;
