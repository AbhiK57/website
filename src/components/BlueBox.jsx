import React from "react";
import { motion } from "framer-motion";
import subwayCar from "../assets/imgs/subwaycar1.jpg"; // adjust the path/extension as needed

const BlueBox = ({ children }) => {
  return (
    <div className="w-full bg-black h-screen relative overflow-hidden">
      {/* Render any children (like TypingAnimation components) */}
      {children}
      
      {/* Animated Subway Car */}
      <motion.img
        src={subwayCar}
        alt="Subway Car"
        className="absolute bottom-0"
        style={{ right: 0 }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          // This easing curve starts fast then decelerates smoothly.
          ease: [0, 0, 0.58, 1],
        }}
      />
    </div>
  );
};

export default BlueBox;
