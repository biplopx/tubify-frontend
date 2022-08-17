import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import useOutSideMenu from '../../Hooks/useOutSideMenu';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [refMenu] = useOutSideMenu(isMenuOpen, setIsMenuOpen);

  if (loading) {
    return <Loading />
  }

  return (
    <section className='flex justify-center items-center'>

      <div className="w-full max-w-sm secondary-bg rounded-lg p-4 border border-gray-500 shadow-md">
        <div className="flex justify-end px-4 pt-4 relative">
          <i onClick={() => setIsMenuOpen(!isMenuOpen)} className="ri-more-2-fill text-xl"></i>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`z-10 w-44 absolute top-12 text-base list-none secondary-bg border border-gray-700 rounded divide-y divide-gray-100 shadow 
          ${isMenuOpen ? "block" : "hidden"}`}>
            <ul ref={refMenu} className="py-1" aria-labelledby="dropdownButton">
              <li className="block py-2 px-4 text-sm text-white hover:bg-sky-500">
                Edit Profile
              </li>
              <li className="block py-2 px-4 text-sm text-white hover:bg-sky-500">
                Upload Image
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-5">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
          <h5 className="mb-1 text-xl font-medium text-white">{user.displayName}</h5>
          <span className="text-sm text-white">Email: {user.email}</span>
        </div>
        <div className='text-left text-normal'>
          <p><strong>Subscribed Package:</strong> Weekly</p>
        </div>
      </div>

    </section>
  );
};

export default MyProfile;