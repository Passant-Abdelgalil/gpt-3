import React from "react";
import "./App.scss";
import { Header, NotImplemented } from "./containers";
import { Navbar } from "./components";
const BrandComponent = React.lazy(() => import("./components/brand/Brand"));

const WhatGPT3Component = React.lazy(() => import("./containers/whatGPT3/WhatGPT3"));
const FeaturesComponent = React.lazy(() => import("./containers/features/Features"));
const PossibilityComponent = React.lazy(() =>
  import("./containers/possibility/Possibility")
);
const FooterComponent = React.lazy(() => import("./containers/footer/Footer"));
const BlogComponent = React.lazy(() => import("./containers/blog/Blog"));
const CTAComponent = React.lazy(() => import("./components/cta/CTA"));

const App = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);

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
      <React.Suspense
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
      </React.Suspense>
    </main>
  );
};

export default App;
