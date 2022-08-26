import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
import auth from '../../firebase.init';
import UsePlayer from '../../Hooks/UsePlayer';
import useSingleUser from '../../Hooks/useSingleUser';

const LikedSongs = () => {
  const [user, loading] = useAuthState(auth);
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const [singleUser, singleUserRefetch] = useSingleUser(user?.email);
  const likedSongs = singleUser?.likedSongs;
  if (loading) {
    return <Loading></Loading>
  }
  const handlePlayMusic = (clickedMusic) => {
    setClickedMusic(clickedMusic);
    setToggle(true)
  }

  return (
    <div>
      <h2 className='text-xl font-semibold'>All Liked Songs</h2>
      <div className='grid grid-cols-8 gap-5'>
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
    </div>
  );
};

export default LikedSongs;