import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import HomePage from "./HomePage";

function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet>
        <HomePage />
      </Outlet>
      <FooterSection />
    </>
  );
}

export default LayoutPage;
