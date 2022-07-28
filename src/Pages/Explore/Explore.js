import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Explore = () => {
  return (
    <section className='flex'>
      <div className="hidden lg:block w-[230px] h-screen bg-[#0D0F2C]">
        <div className="pt-5">
          <img src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" className='block mx-auto' width="120px" alt="logo" />
        </div>
        <div className='px-6 mt-10'>
          <ul>
            <li className='flex items-center py-3'><i class="ri-home-line text-lg mr-3"></i> <Link to="/explore">Home</Link></li>
            <li className='flex items-center py-3'><i class="ri-album-fill text-lg mr-3"></i> <Link to="/explore/your-libary">Your Libary</Link></li>
          </ul>
        </div>
      </div>

      <div className='w-full px-8'>
        <div className='w-full bg-[#0D0F2C] flex justify-between py-4 px-5 mt-4 rounded-md'>
          <div>Icon</div>
          <div>Seach</div>
          <div>Profile</div>
        </div>
        <div className='mt-6'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Explore;