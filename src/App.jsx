import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    //console.log(clientX, clientY);
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <>
    <div className=" relative w-screen h-screen background">
    <div className=" absolute z-10"></div>
    <div className="container absolute z-50" onMouseMove={handleMouseMove}>
      <div
        className="gradient-circle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <h1>Hover Effect with Gradient Circle</h1>
    </div>
    </div>
    </>
  );
};

export default App;
