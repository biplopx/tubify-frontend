import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
import UsePlayer from '../../Hooks/UsePlayer';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect } from 'react';
const AllSongs = () => {
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const [singleUser, setSingleUser] = useState({});
  const { isLoading, data: musics, } = useQuery(['song'], () =>
    fetch('https://tubifybd.herokuapp.com/song/all-song').then(res => res.json())
  )

  const [user, loading] = useAuthState(auth);

  const fetchSingleUser = () => {
    fetch(`https://tubifybd.herokuapp.com/user/single-user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setSingleUser(data)
      })
  }


  useEffect(() => {
    fetchSingleUser()
  }, [])

  if (isLoading || loading) {
    return <Loading></Loading>
  }


  const handlePlayMusic = (clickedMusic) => {
    setClickedMusic(clickedMusic);
    setToggle(true)
  }

  return (
    <>
      <section className='pb-5'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl signika font-semibold'>All Recent Song</h2>
        </div>

        <div className='py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-between'>
          {
            musics.map(music => <MusicCard
              key={music._id}
              music={music}
              handlePlayMusic={handlePlayMusic}
              singleUser={singleUser}
              fetchSingleUser={fetchSingleUser}
            ></MusicCard>)
          }
        </div>
      </section>
      <UsePlayer toggle={toggle} musics={musics} clickedMusic={clickedMusic} ></UsePlayer>
    </>
  );
};

export default AllSongs;