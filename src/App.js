import React, { useState } from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  NotImplemented,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

import "./App.scss";

const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const showOverlayHandler = () => {
    document.body.classList.add("no-scroll");
    setShowOverlay(true);
  };
  const hideOverlayHandler = () => {
    document.body.classList.remove("no-scroll");
    setShowOverlay(false);
  };

  return (
    <main className="App">
      {showOverlay && <NotImplemented hideOverlay={hideOverlayHandler} />}
      <div className="gradient__bg">
        <Navbar showOverlay={showOverlayHandler} />
        <Header showOverlay={showOverlayHandler} />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA showOverlay={showOverlayHandler} />
      <Blog showOverlay={showOverlayHandler} />
      <Footer showOverlay={showOverlayHandler} />
    </main>
  );
};

export default App;
