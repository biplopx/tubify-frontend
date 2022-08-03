import React, { useEffect, useState } from 'react';
import MusicCard from '../../components/MusicCard/MusicCard';

const Explore = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setMusics(data))
  }, [])
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Top 10</h1>
        <div className='flex flex-wrap justify-self-center gap-3'>
          {musics.map(music => <MusicCard key={music.id} music={music} />)}
        </div>
      </div>
    </div>
  );
};

export default Explore;