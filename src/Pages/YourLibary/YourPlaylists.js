import React, { useState } from 'react';
import swal from 'sweetalert';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import useSingleUser from '../../Hooks/useSingleUser';
import MusicCard from '../../components/MusicCard/MusicCard';
import UsePlayer from '../../Hooks/UsePlayer';

const YourPlaylists = () => {
  const [user, loading] = useAuthState(auth);
  const [singleUser, singleUserRefetch] = useSingleUser(user?.email);
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const playlists = singleUser?.playlist;
  // Loading
  if (loading) {
    return <Loading />
  }
  // handle music play
  const handlePlayMusic = (clickedMusic) => {
    if (clickedMusic.musicType === 'paid') {
      if (singleUser.payment === true) {
        setClickedMusic(clickedMusic);
        setToggle(true)
      }
      else {
        swal('Please upgrade to primeum')
      }
    }
    else {
      setClickedMusic(clickedMusic);
      setToggle(true)
    }

  }


  return (
    <>
      <div className='mb-12'>
        <h2 className='text-xl font-semibold mb-4'>Your Playlists ({playlists?.length})</h2>
        {
          playlists?.map(playlist => <section className=''>
            <h2 className='text-xl font-semibold' key={playlist._id}>{playlist.name}</h2>
            <div className='my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-between'>
              {playlist.songs.map(music => <MusicCard
                key={music._id}
                music={music}
                handlePlayMusic={handlePlayMusic}
                singleUser={singleUser}
                fetchSingleUser={singleUserRefetch}
              ></MusicCard>)}
            </div>

          </section>)
        }
      </div>
      <UsePlayer toggle={toggle} clickedMusic={clickedMusic} ></UsePlayer>
    </>
  );
};

export default YourPlaylists;