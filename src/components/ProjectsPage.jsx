import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation.jsx";
import "../index.css"; // Assuming shared styles like fonts might be here

const ProjectsPage = () => {
  return (
    <div className="w-full bg-black h-screen relative overflow-hidden">
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        <TypingAnimation text="Projects" />
        {/* You can add the rest of your project content here later */}
      </div>
      {/* Maybe add a button to go back later */}
    </div>
  );
};

export default ProjectsPage; 