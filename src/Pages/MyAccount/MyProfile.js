import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import useOutSideMenu from '../../Hooks/useOutSideMenu';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [refMenu] = useOutSideMenu(isMenuOpen, setIsMenuOpen);
  const [isEdit, setIsEdit] = useState(false);
  let updateError;
  const imageAPI = 'ca92016292d90d90ab60b6d5ef69b7b8';

  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });


  if (loading || updating) {
    return <Loading />
  }

  if (error) {
    return <p>{error}</p>
  }

  const onSubmit = async data => {
    console.log(data)
    const displayName = data.displayName;
    const formData = new FormData();
    const image = data.image[0];
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageAPI}`;
    if (formData) {
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            const photoURL = result.data.url;
            updateProfile({ photoURL });
            toast.success('Profile Update Successful');
            reset();
            console.log(user)
          }
        })
    }
    updateProfile({ displayName });
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
              <li onClick={() => setIsEdit(!isEdit)} className="block py-2 px-4 text-sm text-white hover:bg-sky-500">
                Edit Profile
              </li>
              <li className="block py-2 px-4 text-sm text-white hover:bg-sky-500">
                Upload Image
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-5">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={user.photoURL ? user.photoURL : 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'} alt="" />
          {
            isEdit ? <>
              <div className='mb-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="block mb-2 text-sm font-medium">Upload Profile Picture</label>
                  <input {...register('image')} className="block w-full text-sm p-1 text-white rounded-lg border border-gray-300 cursor-pointer mb-3" id="file_input" type="file" />
                  <label className="block mb-2 text-sm font-medium">Chanage Name</label>
                  <input {...register('dislayName')} type="text" className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1 mb-3'
                    placeholder='change your name' />
                  <button className='py-1 px-2 text-white bg-sky-500 text-sm rounded-md'>Update Profile</button>
                </form>
                {error && <p>{error}</p>}
              </div>
            </>
              :
              <>
                <h5 className="mb-1 text-xl font-medium text-white">{user.displayName}</h5>
                <span className="text-sm text-white">Email: {user.email}</span>
                <div className='text-left text-normal'>
                  <p><strong>Subscribed Package:</strong> Weekly</p>
                </div>
              </>
          }
        </div>
      </div>

    </section>
  );
};

export default MyProfile;