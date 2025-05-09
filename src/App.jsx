import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [num1, setNum1]   = useState("");
  const [num2, setNum2]   = useState("");
  const [result, setResult] = useState("");
  const DIGIT_WORDS = {
    0: "Charizarding",
    1: "Borked",
    2: "Man Stand",
    3: "Munt",
    4: "Irish Handcuffs",
    5: "Narendra Modi",
    6: "Shexting",
    7: "Took an L",
    8: "420 Blaze It",
    9: "Fucker’s Remorse",
  };
  const epicCalculator = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
  
    if (!isNaN(a) && !isNaN(b)) {
      const sum  = a + b;
      const text = String(sum)
        .replace(/[^0-9]/g, "")
        .split("")
        .map((d) => DIGIT_WORDS[d])
        .join(" ");
  
      setResult(text);
    } else {
      setResult("");
    }
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    //console.log(clientX, clientY);
    setPosition({ x: clientX, y: clientY });
  };
  useEffect(() => {
    const stop = (e) => e.preventDefault();
    document.addEventListener("gesturestart",  stop, { passive: false });
    document.addEventListener("gesturechange", stop, { passive: false });
    document.addEventListener("touchmove", stop, { passive: false });
    return () => {
      document.removeEventListener("gesturestart",  stop);
      document.removeEventListener("gesturechange", stop);
      document.removeEventListener("touchmove",      stop);
    };
  }, []);

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer:fine)").matches;
    setIsTouchDevice(!hasMouse);
  }, []);

  return (
    <>
    <div className=" relative w-screen h-screen background">
    <div className=" absolute z-10"></div>
    <div className="container absolute z-[50]" onMouseMove={!isTouchDevice ? handleMouseMove : null}>
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
      <div className="top-shit outer-shit">
      <h1 className="disclaimerText">Redam's Epic Calculator</h1>
      <div className="text-white top-shit inner-shit">
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Input 1"/>
      <span> + </span>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Input 2"/>
      <button onClick={epicCalculator}>Calculate</button>
      <input type="text" className="cant-shit" value={result} readOnly placeholder="Result"/>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default App;
