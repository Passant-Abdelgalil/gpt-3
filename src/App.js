import React, { lazy, Suspense, useState } from "react";
import "./App.scss";
import { Header, NotImplemented } from "./containers";
import { Navbar } from "./components";
const BrandComponent = lazy(() => import("./components/brand/Brand"));

const WhatGPT3Component = lazy(() => import("./containers/whatGPT3/WhatGPT3"));
const FeaturesComponent = lazy(() => import("./containers/features/Features"));
const PossibilityComponent = lazy(() =>
  import("./containers/possibility/Possibility")
);
const FooterComponent = lazy(() => import("./containers/footer/Footer"));
const BlogComponent = lazy(() => import("./containers/blog/Blog"));
const CTAComponent = lazy(() => import("./components/cta/CTA"));

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
      <Suspense
        fallback={
          <div style={{ color: "white", fontWeight: "bold" }}>Loading...</div>
        }
      >
        <BrandComponent />
        <WhatGPT3Component />
        <FeaturesComponent />
        <PossibilityComponent />
        <CTAComponent showOverlay={showOverlayHandler} />
        <BlogComponent showOverlay={showOverlayHandler} />
        <FooterComponent showOverlay={showOverlayHandler} />
      </Suspense>
    </main>
  );
};

export default App;
