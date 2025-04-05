import React from "react";


const BlueBox = ({ children }) => {
  return (
    <div className="w-full bg-blue-950 h-screen relative">
      {children}
    </div>
  );
};

export default BlueBox;
