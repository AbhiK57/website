import React from "react";
import BlueBox from "./components/BlueBox.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";

const App = () => {
  return (
    <>
      <BlueBox>
        <TypingAnimation text="Abhinav Khanduja"/>
        
      </BlueBox>
      <ProjectsSection />
    </>
  );
};

export default App;
