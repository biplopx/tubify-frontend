import React from 'react';

const ConnectUs = () => {
  return (
    <section className="container mx-auto px-5 my-[160px]">
      <div className="lg:w-4/6 md:w-4/6 w-full md:flex mx-auto bg-[#0D0F2C] rounded-[24px] p-5 items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <p className="signika text-[40px] text-center">Connect with us</p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full text-center">
          <input
            type="text"
            className="bg-[#000221] p-2 rounded-[5px] outline-none w-5/6"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;
