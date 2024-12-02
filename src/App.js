import React from "react";
import BlueBox from "./components/BlueBox.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";

const App = () => {
  return (
    <>
      <BlueBox>
        <TypingAnimation text="Hey, I'm Abhinav Khanduja!" className="top-4 left-4" />
        <TypingAnimation text="Welcome to my site!" className="top-20 left-4" />
      </BlueBox>
      <ProjectsSection />
    </>
  );
};

export default App;
