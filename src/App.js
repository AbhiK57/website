import React from "react";
import BlueBox from "./components/BlueBox.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";
import SubwayLines from "./components/SubwayLines.jsx";

const App = () => {
  return (
    <>
      <BlueBox>
        <TypingAnimation text="Abhinav Khanduja"/>
        
      </BlueBox>
      <ProjectsSection />
      <SubwayLines />
    </>
  );
};

export default App;
