import React from 'react';

const MusicCard = ({ music, handlePlayMusic }) => {
  const { name, cover } = music;

  return (
    <>
      <div className='w-[180px] secondary-bg p-4 rounded-md'>
        <div className='mb-3'>
          <img src="https://i.scdn.co/image/ab67706f00000002e6414a2d228dc14280229000" alt="" className='w-full rounded' />
        </div>
        <div>
          <p className='text-sm'>Ami tomar bhalobasa</p>
          <p className='text-sm'>Arits</p>
        </div>
      </div>

      {/* <div onClick={()=>handlePlayMusic(music)} className='w-[180px] p-4 secondary-bg rounded-md'>
        <div className='mb-3'>
          <img src={cover} className='rounded-md' alt="" />
        </div>
        <h3 className='text-base '>{name.slice(0,10)}</h3>
        <button className=''>play</button>
      </div>
    */}
    </>

  );
};

export default MusicCard;