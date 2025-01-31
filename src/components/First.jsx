import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const First = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default First;
