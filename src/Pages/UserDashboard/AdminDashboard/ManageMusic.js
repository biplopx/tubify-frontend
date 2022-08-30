import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading';
import Song from './Song';
import EditModal from '../../../components/EditModal/EditModal';
const ManageMusic = () => {
  const { isLoading, data: songs, refetch } = useQuery(['song'], () =>
    fetch(`http://localhost:5000/song/all-song`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>
      res.json()
    )
  );

  const [showModal, setShowModal] = useState(false);
  const [singleSong, setSingleSong] = useState(false);

  const editModal = (id) => {
    fetch(`http://localhost:5000/song/single-song/${id}`)
      .then(res => res.json())
      .then(data => {
        setSingleSong(data)
        setShowModal(!showModal)
      })
  }

  if (isLoading) {
    <Loading />
  }

  return (
    <>
      <div className='pb-5'>
        <h2 className='text-2xl signika mb-5'>Manage Song</h2>
        <div className='w-full relative'>
          <div className='overflow-x-auto w-full'>
            <table className='mx-auto max-w-5xl w-full whitespace-nowrap rounded-lg bg-glass overflow-hidden'>
              <thead className="bg-gray-900">
                <tr className="text-white text-left">
                  <th className="font-semibold text-sm uppercase px-6 py-4">Index</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Song Name</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Album</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-500">
                {
                  songs?.map((song, index) => <Song key={song._id} song={song} index={index} refetch={refetch} setShowModal={setShowModal} editModal={editModal} />)
                }
              </tbody>
            </table>
          </div>
        </div>
        {showModal && <EditModal setShowModal={setShowModal} singleSong={singleSong} refetch={refetch} />}
      </div>
    </>

  );
};

export default ManageMusic;