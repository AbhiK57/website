import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlueBox from "./components/BlueBox.jsx";
// import ProjectsSection from "./components/ProjectsSection.jsx"; // Keep this if needed elsewhere, remove if not.
import ProjectsPage from "./components/ProjectsPage.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";

const App = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  // Add a function to go back if needed
  // const handleShowHome = () => {
  //   setShowProjects(false);
  // };

  const pageVariants = {
    initial: {
      x: "-100vw", // Start off-screen to the left
      opacity: 0
    },
    in: {
      x: 0, // Slide in to the center
      opacity: 1
    },
    out: {
      x: "100vw", // Slide out to the right
      opacity: 0
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <AnimatePresence initial={false} mode='wait'>
      {!showProjects ? (
        <motion.div
          key="bluebox" // Key is important for AnimatePresence
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <BlueBox onNavigate={handleShowProjects}>
            <TypingAnimation text="Abhinav Khanduja" />
          </BlueBox>
        </motion.div>
      ) : (
        <motion.div
          key="projects" // Key is important for AnimatePresence
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {/* Pass handleShowHome here if you add a back button */}
          <ProjectsPage />
        </motion.div>
      )}
      {/* <ProjectsSection /> If this is a separate static section, keep it outside AnimatePresence */}
    </AnimatePresence>
  );
};

export default App;
