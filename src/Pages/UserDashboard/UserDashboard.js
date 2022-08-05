import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
const UserDashboard = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMyAccountMenuOpen, setMyAccountMenu] = useState(false);
  const [user, loading] = useAuthState(auth);
  const menuItems = <>
    <li className='flex items-center py-3'><i className="ri-home-line text-xl mr-3"></i> <Link to="/dashboard">Explore</Link></li>
    <li className='flex items-center py-3'><i className="ri-folder-music-line text-xl mr-3"></i> <Link to="/dashboard/your-libary">Your Libary</Link></li>
    <li className='flex items-center py-3'><i className="ri-add-box-fill text-xl mr-3"></i> <Link to="/dashboard/create-playlist">Create Playlist</Link></li>
    {/* Admin Route */}
    <li className='flex items-center py-3'><i className="ri-group-fill text-xl mr-3"></i> <Link to="/dashboard/all-users">All Users</Link></li>
    <li className='flex items-center py-3'><i className="ri-add-fill text-xl mr-3"></i> <Link to="/dashboard/add-music">Add Music</Link></li>
  </>

  if (loading) {
    return <Loading />
  }

  const logout = () => {
    signOut(auth);
  };


  return (
    <section className='flex'>
      <div className="hidden lg:block w-[230px] h-screen bg-[#0D0F2C]">
        <div className="pt-5">
          <Link to="/"><img src="https://i.ibb.co/fFhrMHZ/tubify-logo.png" className='block mx-auto' width="120px" alt="logo" /></Link>
        </div>
        <div className='px-6 mt-10'>
          <ul>
            {menuItems}
          </ul>
        </div>
      </div>

      <div className='w-full px-4'>
        <div className='w-full box-border relative h-[70px] bg-[#0D0F2C] flex justify-between items-center py-2 px-3 mt-4 rounded-md'>
          {/* Mobile Menu */}
          <div onClick={() => { setMobileMenuOpen(!isMobileMenuOpen) }} className='lg:hidden flex items-center bg-'>
            <i className={isMobileMenuOpen ? "ri-close-line text-xl mr-3" : "ri-menu-line text-xl mr-3"}></i>
          </div>
          <div className={`transition duration-500 w-60 bg-[#0D0F2C] p-3 absolute left-0 top-20 rounded-md ${isMobileMenuOpen ? 'opacity-100' : "opacity-0 pointer-events-none"}`}>
            <ul>
              {menuItems}
            </ul>
          </div>
          {/* Mobile Menu End */}
          {/* Search */}
          <div>
            <input className="shadow bg-[#000221] border rounded w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search song, movies, videos" />
          </div>
          {/* My Account */}
          <div className="relative inline-block text-left">
            <div>
              <button onClick={() => { setMyAccountMenu(!isMyAccountMenuOpen) }} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-transparen text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" aria-expanded="true" aria-haspopup="true">
                {user?.displayName}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className={`origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg secondary-bg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${isMyAccountMenuOpen ? "block" : "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <Link to="/dashboard/my-profile" className="text--white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Profile</Link>
                <button onClick={logout} className="text--white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Logut</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;