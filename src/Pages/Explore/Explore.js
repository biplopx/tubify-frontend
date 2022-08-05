import React from 'react';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import { useQuery } from 'react-query'
import Loading from '../../components/Loading/Loading';
const Explore = () => {
  // const { isLoading, error, data } = useQuery('exploreAudioFree', () =>
  //    fetch('http://localhost:5000/song').then(res =>
  //      res.json()
  //    )
  //  );
   
  //  if(isLoading){
  //   return <Loading></Loading>
  //  }
  //  console.log(error)
  return (
    <div>
      <h3 className='px-4'>Explore </h3>
      <MusicPlayer></MusicPlayer>
    </div>
  );
};

export default Explore;