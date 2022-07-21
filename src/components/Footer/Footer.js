import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-[#0D0F2C]">
      <div className="flex flex-wrap ">
        <div className="lg:w-3/12 md:w-1/2 w-full p-5">
          <div>
            <img src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" alt="" />
          </div>
          <p className="text-[16px] text-justify">
            Best Place lisenting and watching video content. We have more than
            100M + high qulaity content. The quick brown fox jumps over the lazy
            dog.
          </p>
        </div>
        <div className="lg:w-3/12 md:w-1/2 w-full p-5">
          <h3 className="text-[#FFFFFF] text-[24px] signika mb-2">Company</h3>
          <ul className="list-disc">
            <li>About us</li>
            <li>Privecy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="lg:w-3/12 md:w-1/2 w-full p-5">
          <h3 className="text-[#FFFFFF] text-[24px] signika mb-2">
            My Account
          </h3>
          <ul className="list-disc">
            <li>About us</li>
            <li>Privecy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="lg:w-3/12 md:w-1/2 w-full p-5">
          <h3 className="text-[#FFFFFF] text-[24px] signika mb-2">Subscribe</h3>
          <ul className="list-disc">
            <li>About us</li>
            <li>Privecy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
