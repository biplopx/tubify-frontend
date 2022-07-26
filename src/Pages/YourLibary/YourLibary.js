
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import useSingleUser from '../../Hooks/useSingleUser';
const YourLibary = () => {
  const [user, loading] = useAuthState(auth);
  const [singleUser] = useSingleUser(user?.email)
  const likedSongs = singleUser?.likedSongs;
  const playlists = singleUser?.playlist;

  if (loading) {
    return <Loading></Loading>
  }


  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>
        <div className='bg-gradient-to-br from-pink-400 to-pink-600 text-white p-4 rounded-md col-span-2'>
          <h2 className='text-xl font-bold mb-3'>Liked Songs</h2>
          <p><Link to="/dashboard/liked-songs">{likedSongs?.length} Liked Song</Link></p>
        </div>
        <div className='bg-gradient-to-br from-blue-400 to-pink-600 text-white p-4 rounded-md col-span-2'>
          <h2 className='text-xl font-bold mb-3'>Playlists</h2>
          <p><Link to="/dashboard/your-playlists">{playlists?.length} Playlists</Link></p>
        </div>
      </div>
    </>
  );
};

export default YourLibary;