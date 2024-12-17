import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    //console.log(clientX, clientY);
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer:fine)").matches;
    setIsTouchDevice(!hasMouse);
  }, []);

  return (
    <>
    <div className=" relative w-screen h-screen background">
    <div className=" absolute z-10"></div>
    <div className="container absolute z-50" onMouseMove={!isTouchDevice ? handleMouseMove : null}>
      <div
        className={`gradient-circle ${isTouchDevice ? "breathe" : ""}`}
        style={
          !isTouchDevice
            ? {
                left: `${position.x}px`,
                top: `${position.y}px`,
              }
            : {}
        }
      >
      </div>
      <h1 className="disclaimerText">
        {isTouchDevice
          ? "Sorry, this effect is not available on touch devices, please use a Desktop/Laptop instead."
          : "Hover Effect with Gradient Circle"}
      </h1>
    </div>
    </div>
    </>
  );
};

export default App;
