import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Explore = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className='flex'>
      <div className="hidden lg:block w-[230px] h-screen bg-[#0D0F2C]">
        <div className="pt-5">
          <Link to="/"><img src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" className='block mx-auto' width="120px" alt="logo" /></Link>
        </div>
        <div className='px-6 mt-10'>
          <ul>
            <li className='flex items-center py-3'><i class="ri-home-line text-xl mr-3"></i> <Link to="/explore">Home</Link></li>
            <li className='flex items-center py-3'><i class="ri-folder-music-line text-xl mr-3"></i> <Link to="/explore/your-libary">Your Libary</Link></li>
          </ul>
        </div>
      </div>

      <div className='w-full px-8'>
        <div className='w-full box-border relative h-[70px] bg-[#0D0F2C] flex justify-between items-center py-2 px-3 mt-4 rounded-md'>
          {/* Mobile Menu */}
          <div onClick={() => { setMobileMenuOpen(!isMobileMenuOpen) }} className='lg:hidden flex items-center bg-'>
            <i class={isMobileMenuOpen ? "ri-close-line text-xl mr-3" : "ri-menu-line text-xl mr-3"}></i>
          </div>
          <div className={isMobileMenuOpen ? 'w-60 bg-[#0D0F2C] p-3 absolute left-0 top-20 rounded-md transition duration-500' : "hidden"}>
            <ul>
              <li className='flex items-center py-3'><i class="ri-home-line text-xl mr-3"></i> <Link to="/explore">Home</Link></li>
              <li className='flex items-center py-3'><i class="ri-folder-music-line text-xl mr-3"></i> <Link to="/explore/your-libary">Your Libary</Link></li>
            </ul>
          </div>
          {/* Mobile Menu End */}
          <div>
            <input class="shadow bg-[#000221] border rounded w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search song, movies, videos" />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="rounded-full w-[40px]"
              alt="Avatar"
            />
          </div>
        </div>
        <div className='mt-6'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Explore;