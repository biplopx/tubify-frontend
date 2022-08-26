import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
import auth from '../../firebase.init';
import UsePlayer from '../../Hooks/UsePlayer';
import useSingleUser from '../../Hooks/useSingleUser';
const YourLibary = () => {
  const [user, loading] = useAuthState(auth);
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const [singleUser, singleUserRefetch] = useSingleUser(user?.email)
  const likedSongs = singleUser?.likedSongs;


  if (loading) {
    return <Loading></Loading>
  }
  const handlePlayMusic = (clickedMusic) => {
    setClickedMusic(clickedMusic);
    setToggle(true)
  }


  return (
    <>
      <div className='grid grid-cols-8 gap-5'>
        <div className='bg-gradient-to-br from-pink-400 to-pink-600 text-white p-4 rounded-md col-span-2'>
          <h2 className='text-xl font-bold mb-3'>Liked Songs</h2>
          <p><Link to="/dashboard/liked-songs">{likedSongs?.length} Liked Song</Link></p>
        </div>
        {
          likedSongs?.map(music =>
            <MusicCard
              key={music._id}
              music={music}
              handlePlayMusic={handlePlayMusic}
              singleUser={singleUser}
              fetchSingleUser={singleUserRefetch}
            ></MusicCard>)

        }
      </div>
      <UsePlayer toggle={toggle} musics={likedSongs} clickedMusic={clickedMusic} ></UsePlayer>
    </>
  );
};

export default YourLibary;