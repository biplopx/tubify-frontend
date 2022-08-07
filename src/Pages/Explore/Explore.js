import React, { useState } from 'react';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
const Explore = () => {
  const [clickedMusic,setClickedMusic]=useState({})
  const { isLoading, error, data: musics } = useQuery(['song'], () =>
    fetch('http://localhost:5000/song/all-song').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  const handlePlayMusic =(clickedMusic)=>{
    setClickedMusic(clickedMusic);
  }
  return (
    <div>
      <h3 className='px-4'>Explore </h3>
      <div className='grid grid-cols-3'>
      {
        musics.map(music=><MusicCard
        key={music._id}
        music={music}
        handlePlayMusic={handlePlayMusic}
        ></MusicCard>)
      }
      </div>
      <MusicPlayer music={musics}></MusicPlayer>
    </div>
  );
};

export default Explore;