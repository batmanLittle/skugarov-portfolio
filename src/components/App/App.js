import "./App.css";
import Main from "../Main/Main";
import LowerSection from "../LowerSection/LowerSection";
import React, { useState, useEffect } from "react";

function App() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 769) {
        if (width === 1280) {
          setZoom(1);
        } else {
          setZoom(width / 1280);
        }
      }
      if (width <= 768) {
        if (width === 320) {
          setZoom(1);
        } else {
          setZoom(width / 320);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [zoom]);

  return (
    <div className="app" style={{ zoom: `${zoom}` }}>
      <LowerSection />
      <Main />
    </div>
  );
}

export default App;
