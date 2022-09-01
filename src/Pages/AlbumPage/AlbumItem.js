import React from 'react';

const AlbumItem = ({ index, song, handlePlayMusic }) => {
  const { name, singer } = song;
  return (
    <tr>
      <td className='px-6 py-2'>{index + 1}</td>
      <td className='px-6 py-2'>
        {name}
        <p className='text-sm text-gray-400'>{singer}</p>
      </td>
      <td className='px-6 py-2'>
        <i onClick={() => handlePlayMusic(song)} className="ri-play-fill text-sm w-5 h-5 p-1 rounded-full text-white bg-sky-500 flex justify-center items-center"></i>
      </td>
    </tr>
  );
};

export default AlbumItem;