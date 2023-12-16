import "./App.css";
import Main from "../Main/Main";
import LowerSection from "../LowerSection/LowerSection";
import React, { useState, useEffect } from "react";

function App() {
  // const [mobileScreen, setMobileScreen] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 320) {
  //     setMobileScreen(false);
  //   } else {
  //     setMobileScreen(true);
  //   }
  // });

  // function zoom(screenWidth) {
  //   const baseWidth = 1280; // базовая ширина экрана
  //   const x = screenWidth / baseWidth; // рассчитываем значение x
  //   return x;
  // }

  // const x = 1;
  // const screenWidth = 1280;
  // const zoomedWidth = zoom(x, screenWidth);
  // console.log(zoomedWidth);

  // useEffect(() => {
  //   const screenWidth = 1920;
  //   const x = zoom(screenWidth);
  //   console.log(x);
  // });

  return (
    <div className="app">
      <LowerSection />
      <Main />
    </div>
  );
}

export default App;
