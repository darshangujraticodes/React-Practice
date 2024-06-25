import React from "react";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import BgColorChange from "../components/BgColorChange";
import TodoApp from "../components/TodoApp";
import FooterSection from "../components/FooterSection";
import LoginPage from "../components/LoginPage";
import ProfilePage from "../components/ProfilePage";
import UserContextProvider from "../context/UserContextProvider";

function HomePage() {
  return (
    <>
      <HeroContent />
      <BgColorChange />
      <TodoApp />
      <UserContextProvider>
        <LoginPage />
        <ProfilePage />
      </UserContextProvider>
    </>
  );
}

export default HomePage;
