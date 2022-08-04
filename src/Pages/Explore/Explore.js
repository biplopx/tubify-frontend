import React from 'react';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import { useQuery } from 'react-query'
import Loading from '../../components/Loading/Loading';
const Explore = () => {
  // const { isLoading, error, data } = useQuery('recommendation', () =>
  //    fetch('').then(res =>
  //      res.json()
  //    )
  //  );
  //  if(isLoading){
  //   return <Loading></Loading>
  //  }
  return (
    <div>
      <h3 className='px-4'>Explore recommendation</h3>
      <MusicPlayer></MusicPlayer>
    </div>
  );
};

export default Explore;