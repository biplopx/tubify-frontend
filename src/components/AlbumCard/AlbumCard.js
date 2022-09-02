import React from 'react';
import { Link } from 'react-router-dom';


const AlbumCard = ({ album }) => {
  const { _id, albumImg, name, songs } = album;

  return (
    <div className='secondary-bg p-3 rounded-md'>
      {/* Card Image */}
      <div className='mb-3 relative'>
        <img src={albumImg} alt={albumImg} className='rounded object-cover h-52 w-full' />
      </div>
      {/* Content */}
      <div>
        <p className='text-md mb-3'><Link to={`/dashboard/album/${_id}`}>{name}</Link></p>
        <p className='text-sm mb-3'>Songs: {songs.length}</p>
      </div>
    </div>
  );
};

export default AlbumCard;