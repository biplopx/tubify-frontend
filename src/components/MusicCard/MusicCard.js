import React from 'react';

const MusicCard = ({ music, handlePlayMusic }) => {
  const { name, cover, singer } = music;

  return (
    <>
      <div className='w-[180px] secondary-bg p-4 rounded-md'>
        <div onClick={()=>handlePlayMusic(music)} className='mb-3'>
          <img src={cover} alt="" className='w-full rounded' />
        </div>
        <div>
          <p className='text-sm'>{name}</p>
          <p className='text-sm'>{singer}</p>
        </div>
      </div> 
    </>

  );
};

export default MusicCard;