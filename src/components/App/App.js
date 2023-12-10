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

  return (
    <div className="app">
      <LowerSection />
      <Main />
    </div>
  );
}

export default App;
