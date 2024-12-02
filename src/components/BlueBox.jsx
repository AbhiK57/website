import React from "react";
import { motion } from "framer-motion";
import subwayCar from "../assets/imgs/subwaycar1.png"; 

const BlueBox = ({ children }) => {
  return (
    <div className="w-full bg-black h-screen relative overflow-hidden">
      {children}
      <motion.img
        src={subwayCar}
        alt="Subway Car"
        className="absolute bottom-0"
        style={{ right: 0 }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          // Deceleration easing curve
          ease: [0, 0, 0.58, 1],
        }}
      />
    </div>
  );
};

export default BlueBox;
