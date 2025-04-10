import React from "react";
import BlueBox from "./components/BlueBox.jsx";
import Hero from "./components/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";

const App = () => {
  return (
    <>
      <BlueBox>
        <TypingAnimation text="Hi, Welcome to Abhi's Website" />
      </BlueBox>
      <ProjectsSection />
    </>
  );
};

export default App;
