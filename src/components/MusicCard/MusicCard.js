import React from 'react';

const MusicCard = ({ music,handlePlayMusic }) => {
  const { name, cover } = music;
 
  return (
    
      <div onClick={()=>handlePlayMusic(music)} className='w-[180px] p-4 secondary-bg rounded-md'>
        <div className='mb-3'>
          <img src={cover} className='rounded-md' alt="" />
        </div>
        <h3 className='text-base '>{name.slice(0,10)}</h3>
        <button className=''>play</button>
      </div>
   
  );
};

export default MusicCard;