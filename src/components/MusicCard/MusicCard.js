import React from 'react';

const MusicCard = ({ music }) => {
  const { title } = music;
  console.log(music)
  return (
    <div className='w-[180px] p-4 secondary-bg rounded-md'>
      <div className='mb-3'>
        <img src="https://i.scdn.co/image/ab67706f00000002a1c91357aedf046895eaca15" className='rounded-md' alt="" />
      </div>
      <h3 className='text-base'>{title}</h3>
      <p className='text-xs'>Ananta</p>
    </div>
  );
};

export default MusicCard;