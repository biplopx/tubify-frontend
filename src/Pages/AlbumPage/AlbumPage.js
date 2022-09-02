import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import AlbumItem from './AlbumItem';
import UsePlayer from '../../Hooks/UsePlayer';
import { useState } from 'react';
import useSingleUser from '../../Hooks/useSingleUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const AlbumPage = () => {
  const { albumId } = useParams();
  const { isLoading, data: album, } = useQuery(['album'], () =>
    fetch(`http://localhost:5000/albums/single-album/${albumId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  );
  const [toggle, setToggle] = useState(false)
  const [clickedMusic, setClickedMusic] = useState({});
  const [user, loading] = useAuthState(auth);
  const [singleUser] = useSingleUser(user?.email);

  console.log(singleUser)

  // Loading
  if (isLoading || loading) {
    return <Loading />
  }

  //  Song
  const { songs } = album;


  // Hnadle Song Play
  const handlePlayMusic = (clickedMusic) => {
    console.log(clickedMusic)
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
        <div className='pb-5'>
          <h2 className='text-2xl signika mb-5'>Album: {album.name}</h2>
          <div className='w-full relative'>
            <div className='overflow-x-auto w-full'>
              <table className='mx-auto max-w-5xl w-full whitespace-nowrap rounded-lg bg-glass overflow-hidden'>
                <thead className="bg-gray-900">
                  <tr className="text-white text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">Index</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Song Name</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                  {songs?.map((song, index) => <AlbumItem key={song._id} song={song} index={index} handlePlayMusic={handlePlayMusic} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <UsePlayer toggle={toggle} musics={songs} clickedMusic={clickedMusic} ></UsePlayer>
    </>

  );
};

export default AlbumPage;