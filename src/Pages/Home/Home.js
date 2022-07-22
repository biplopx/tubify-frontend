import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Partner from "./Partner/Partner";
import WatchEverything from "./WatchEverything/WatchEveryting";


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <WatchEverything/>
      <Partner />
      <Pricing />
    </>
  );
};

export default Home;
