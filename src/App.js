import React, { Suspense, useState } from "react";
import { Footer, Blog, Possibility, Features } from "./containers";

import { CTA, Navbar } from "./components";

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

  const BrandComponent = React.lazy(() => import("./components/brand/Brand"));
  const NotImplementedComponent = React.lazy(() =>
    import("./containers/notImplemented/NotImplemented")
  );
  const WhatGPT3Component = React.lazy(() =>
    import("./containers/whatGPT3/WhatGPT3")
  );
  const HeaderComponent = React.lazy(() =>
    import("./containers/header/Header")
  );

  return (
    <main className="App">
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        {showOverlay && (
          <NotImplementedComponent hideOverlay={hideOverlayHandler} />
        )}
        <div className="gradient__bg">
          <Navbar showOverlay={showOverlayHandler} />
          <HeaderComponent showOverlay={showOverlayHandler} />
        </div>
        <BrandComponent />
        <WhatGPT3Component />
        <Features />
        <Possibility />
        <CTA showOverlay={showOverlayHandler} />
        <Blog showOverlay={showOverlayHandler} />
        <Footer showOverlay={showOverlayHandler} />
      </Suspense>
    </main>
  );
};

export default App;
