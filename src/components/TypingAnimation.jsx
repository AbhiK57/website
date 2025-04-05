import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const TypingAnimation = ({ text }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div
      className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-4xl"
      style={{ fontFamily: "Amaranth" }}
    >
      {!typingComplete ? (
        <ReactTyped
          strings={[text]}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
          showCursor={true}
          onComplete={() => setTypingComplete(true)}
        />
      ) : (
        // Display static text after typing finishes to prevent re-animation.
        <span>{text}</span>
      )}
    </div>
  );
};

export default TypingAnimation;
