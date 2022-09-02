import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading';
import VideoRow from './VideoRow';

const ManageVideo = () => {
  const { isLoading, data: videos, refetch } = useQuery(['videos'], () =>
    fetch(`https://tubifybd.herokuapp.com/video/all-videos`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>
      res.json()
    )
  );
  // Loading
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='pb-5'>
        <h2 className='text-2xl signika mb-5'>Manage Video</h2>
        <div className='w-full relative'>
          <div className='overflow-x-auto w-full'>
            <table className='mx-auto max-w-5xl w-full whitespace-nowrap rounded-lg bg-glass overflow-hidden break-words'>
              <thead className="bg-gray-900">
                <tr className="text-white text-left">
                  <th className="font-semibold text-sm uppercase px-6 py-4">Index</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Video Title</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Video Type</th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-500">
                {
                  videos?.map((video, index) => <VideoRow key={video._id} index={index} video={video} refetch={refetch}></VideoRow>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageVideo;