import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading';
import Song from './Song';
const ManageMusic = () => {
  const { isLoading, data: songs, refetch } = useQuery(['song'], () =>
    fetch('http://localhost:5000/song/all-song').then(res =>
      res.json()
    )
  )
  console.log(songs);


  if (isLoading) {
    <Loading />
  }

  return (
    <div>
      <h2 className='text-2xl signika mb-5'>Manage Song</h2>
      <div className='w-full'>
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
                songs?.map((song, index) => <Song key={song._id} song={song} index={index} refetch={refetch} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMusic;