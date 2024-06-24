import React from "react";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import BgColorChange from "../components/BgColorChange";
import TodoApp from "../components/TodoApp";
import FooterSection from "../components/FooterSection";

function HomePage() {
  return (
    <>
      <HeroContent />
      <BgColorChange />
      <TodoApp />
    </>
  );
}

export default HomePage;
