import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
import UsePlayer from '../../Hooks/UsePlayer';
import { Link } from 'react-router-dom';
const Explore = () => {
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({})
  const { isLoading, data: musics, } = useQuery(['song'], () =>
    fetch('http://localhost:5000/song/all-song').then(res => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  const handlePlayMusic = (clickedMusic) => {
    setClickedMusic(clickedMusic);
    setToggle(true)
  }

  return (
    <>
      <section>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl signika font-semibold'>Recently Added</h2>
          <p className='text-normal'><Link to="/">View All</Link></p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4 justify-between'>
          {
            musics.map(music => <MusicCard
              key={music._id}
              music={music}
              handlePlayMusic={handlePlayMusic}
            ></MusicCard>)
          }
        </div>
      </section>
      <UsePlayer toggle={toggle} musics={musics} clickedMusic={clickedMusic} ></UsePlayer>
    </>
  );
};

export default Explore;