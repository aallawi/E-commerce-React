import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Routers from "../../Routers/Routers";

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};
