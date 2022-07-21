import React from 'react';
import Banner from './Banner/Banner';
import ConnectUs from './ConnectUs/ConnectUs';
import Pricing from './Pricing/Pricing';
import WatchEverything from './WatchEverything/WatchEveryting';

const Home = () => {
  return (
    <>
      <Banner />
      <WatchEverything/>
      <Pricing />
      <ConnectUs />
    </>
  );
};

export default Home;
