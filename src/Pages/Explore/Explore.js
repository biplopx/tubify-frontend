import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import MusicCard from '../../components/MusicCard/MusicCard';
import UsePlayer from '../../Hooks/UsePlayer';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../../Hooks/useSingleUser';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import swal from 'sweetalert';
const Explore = () => {
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const [user, loading] = useAuthState(auth);
  const [singleUser, singleUserRefetch] = useSingleUser(user?.email)

  // Load recent song
  const { isLoading, data: musics, } = useQuery(['song'], () =>
    fetch(`http://localhost:5000/song/all-song`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )
  // Load recent song
  const { paidSongLoading, data: paidSongs } = useQuery(['paidSong'], () =>
    fetch(`http://localhost:5000/song/paid-songs`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )


  //  Recent Album
  const { albumLoading, data: albums, } = useQuery(['albums'], () =>
    fetch(`http://localhost:5000/albums`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )


  if (isLoading || loading || albumLoading || paidSongLoading) {
    return <Loading></Loading>
  }
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
      <section>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Recently Added</h2>
          <p className='text-normal'><Link to="/dashboard/all-songs">View All</Link></p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-between'>
          {
            musics?.slice(0, 8).map(music => <MusicCard
              key={music._id}
              music={music}
              handlePlayMusic={handlePlayMusic}
              singleUser={singleUser}
              fetchSingleUser={singleUserRefetch}
            ></MusicCard>)
          }
        </div>
      </section>
      <section className='my-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Recent Albums</h2>
          <p className='text-normal'><Link to="/dashboard/all-songs">View All</Link></p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-between'>
          {
            albums?.map(album => <AlbumCard key={album._id} album={album} />)
          }
        </div>
      </section>
      <section>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Paid Songs</h2>
          <p className='text-normal'><Link to="/dashboard/all-songs">View All</Link></p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-between'>
          {
            paidSongs?.slice(0, 8).map(music => <MusicCard
              key={music._id}
              music={music}
              handlePlayMusic={handlePlayMusic}
              singleUser={singleUser}
              fetchSingleUser={singleUserRefetch}
            ></MusicCard>)
          }
        </div>
      </section>
      <UsePlayer toggle={toggle} musics={musics} clickedMusic={clickedMusic} ></UsePlayer>
    </>
  );
};

export default Explore;