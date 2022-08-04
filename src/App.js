import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <main className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
